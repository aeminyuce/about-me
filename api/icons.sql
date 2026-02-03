CREATE OR REPLACE FUNCTION get_icons()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = icons
AS $$
SELECT json_build_object(
  'result', json_build_object(
      'info', (
        SELECT jsonb_strip_nulls(
          jsonb_build_object(
            'title', ici.title,
            'image1', ici.image1,
            'image2', ici.image2,
            'text', ici.text,
            'sizeChangerPrefix', ici.sizechangerprefix,
            'sizeChangerSuffix', ici.sizechangersuffix,
            'iconsSuffix', ici.iconssuffix
          )
        )
        FROM icons.info ici
        LIMIT 1
      ),
      'sizes', (
        SELECT json_agg(to_jsonb(ics) - 'id' ORDER BY ics.id)
        FROM icons.sizes ics
      )
    )
);
$$;