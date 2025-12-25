CREATE OR REPLACE FUNCTION get_lab()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT json_build_object(
  'result', json_build_object(
      'menu', (
        SELECT json_agg(to_jsonb(lme) - 'id')
        FROM lab.menu lme
      )
    )
);
$$;