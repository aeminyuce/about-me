CREATE OR REPLACE FUNCTION get_lab_alerts()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT jsonb_build_object(
  'result', jsonb_build_object(
    'alerts',jsonb_build_object(
      'desc', (
        SELECT jsonb_object_agg(lald.type, lald.desc ORDER BY lald.id)
        FROM lab.alerts_desc lald
      ),
      'text', (
        SELECT jsonb_object_agg(lalt.type, lalt.text ORDER BY lalt.id)
        FROM lab.alerts_text lalt
      )
    )
  )
);
$$;