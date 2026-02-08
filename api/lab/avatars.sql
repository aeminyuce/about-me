CREATE OR REPLACE FUNCTION get_lab_avatars()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT json_build_object(
  'result', json_build_object(
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
    )
  )
);
$$;