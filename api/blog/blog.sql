CREATE OR REPLACE FUNCTION get_blog(post text DEFAULT NULL)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = blog
AS $$
DECLARE
    tbl text;
    result jsonb := '{}'::jsonb;
    rows jsonb;
    sql text;
BEGIN
    FOR tbl IN
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'blog'
          AND table_type = 'BASE TABLE'
          AND (post IS NULL OR table_name = post)
        ORDER BY table_name
    LOOP

        IF post IS NULL THEN
            -- Pivot first, then aggregate
            sql := format(
                'SELECT json_agg(pivoted) FROM (
                    SELECT jsonb_build_object(
                        ''postTitle'', (SELECT data FROM blog.%1$I WHERE type = ''postTitle'' LIMIT 1),
                        ''postDate'',  (SELECT data FROM blog.%1$I WHERE type = ''postDate'' LIMIT 1),
                        ''postImage'', (SELECT data FROM blog.%1$I WHERE type = ''postImage'' LIMIT 1)
                    ) AS pivoted
                ) s',
                tbl
            );
        ELSE
            -- Full table data
            sql := format(
                'SELECT json_agg(to_jsonb(t) - ''id'') FROM blog.%I t',
                tbl
            );
        END IF;

        EXECUTE sql INTO rows;

        result := result || jsonb_build_object(tbl, rows);
    END LOOP;

    RETURN jsonb_build_object('result', result);
END;
$$;
