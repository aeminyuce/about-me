CREATE OR REPLACE FUNCTION get_icons()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = icons
AS $$
SELECT jsonb_build_object(
  'result', jsonb_build_object(
    'info', (
      SELECT to_jsonb(ici) - 'id'
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