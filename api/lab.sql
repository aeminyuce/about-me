CREATE OR REPLACE FUNCTION get_lab()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT json_build_object(
  'result', json_build_object(
      'menu', (
        SELECT json_agg(to_jsonb(lme) - 'id' ORDER BY lme.id)
        FROM lab.menu lme
      ),
      'sidebarTitle', (
        SELECT sidebartitle
        FROM lab.sidebar
        LIMIT 1
      ),
      'intro', (
        SELECT jsonb_strip_nulls(
          jsonb_build_object(
            'title', lin.title,
            'subTitle', lin.subtitle,
            'leadText', lin.leadtext,
            'textPart1', lin.textpart1,
            'textPart2', lin.textpart2,
            'textPart3', lin.textpart3,
            'images', (
              SELECT json_agg(to_jsonb(lii) - 'id' ORDER BY lii.id)
              FROM lab.intro_images lii
            )
          )
        )
        FROM lab.intro lin
        LIMIT 1
      )
    )
);
$$;