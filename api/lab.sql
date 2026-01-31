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
      ),
      'alerts', json_strip_nulls(
        json_build_object(
          'desc', (
            SELECT jsonb_object_agg(lald.type, lald.desc ORDER BY lald.id)
            FROM lab.alerts_desc lald
          ),
          'text', (
            SELECT jsonb_object_agg(lalt.type, lalt.text ORDER BY lalt.id)
            FROM lab.alerts_text lalt
          )
        )
      ),
      'avatars', json_strip_nulls(
        json_build_object(
          'desc', (
            SELECT jsonb_object_agg(lavd.type, lavd.desc ORDER BY lavd.id)
            FROM lab.avatars_desc lavd
          ),
          'text', (
            SELECT jsonb_object_agg(lavt.type, lavt.text ORDER BY lavt.id)
            FROM lab.avatars_text lavt
          ),
          'img', (
            SELECT json_agg(lavi.avatar ORDER BY lavi.id)
            FROM lab.avatars_img lavi
          )
        )
      ),
      'breadcrumbs', json_strip_nulls(
        json_build_object(
          'desc', (
            SELECT jsonb_object_agg(lbrd.type, lbrd.desc ORDER BY lbrd.id)
            FROM lab.breadcrumbs_desc lbrd
          ),
          'text', (
            SELECT jsonb_object_agg(lbrt.type, lbrt.text ORDER BY lbrt.id)
            FROM lab.breadcrumbs_text lbrt
          )
        )
      )
    )
);
$$;