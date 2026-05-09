CREATE OR REPLACE FUNCTION get_lab_buttons()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT jsonb_build_object(
  'result', jsonb_build_object(
    'buttons', jsonb_build_object(
      'desc', (
        SELECT jsonb_object_agg(lbtd.type, lbtd.desc ORDER BY lbtd.id)
        FROM lab.buttons_desc lbtd
      ),
      'text', (
        SELECT jsonb_object_agg(lbtt.type, lbtt.text ORDER BY lbtt.id)
        FROM lab.buttons_text lbtt
      )
    )
  )
);
$$;