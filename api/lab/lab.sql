CREATE OR REPLACE FUNCTION get_lab()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT jsonb_build_object(
  'result', ( SELECT
    (
      SELECT to_jsonb(lsb) - 'id'
      FROM lab.sidebar lsb
      LIMIT 1
    ) ||
    jsonb_build_object (
      'menu', (
        SELECT json_agg(to_jsonb(lme) - 'id' ORDER BY lme.id)
        FROM lab.menu lme
      ),
      'intro', ( SELECT
        (
          SELECT to_jsonb(lin) - 'id' - 'images'
          FROM lab.intro lin
          LIMIT 1
        ) ||
        jsonb_build_object(
          'images', (
            SELECT json_agg(to_jsonb(lii) - 'id' ORDER BY lii.id)
            FROM lab.intro_images lii
          )
        )
      )
    )
  )
);
$$;