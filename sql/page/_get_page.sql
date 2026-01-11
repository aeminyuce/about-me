CREATE OR REPLACE FUNCTION get_page()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = page
AS $$
SELECT json_build_object(
  'result', json_build_object(
    'general', (
      SELECT to_jsonb(gnr) - 'id'
      FROM page.general gnr
      LIMIT 1
    ),
    'header', json_strip_nulls(
      json_build_object(
        'getInTouch', (
          SELECT to_jsonb(hgi) - 'id'
          FROM page.header_getintouch hgi
          LIMIT 1
        ),
        'headerLinks', (
          SELECT json_agg(to_jsonb(hhl) - 'id' ORDER BY hhl.id)
          FROM page.header_headerlinks hhl
        ),
        'socialLinks', (
          SELECT json_agg(to_jsonb(hsl) - 'id' ORDER BY hsl.id)
          FROM page.header_sociallinks hsl
        )
      )
    )
  )
);
$$;