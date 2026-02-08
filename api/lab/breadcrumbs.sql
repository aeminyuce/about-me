CREATE OR REPLACE FUNCTION get_lab_breadcrumbs()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT json_build_object(
  'result', json_build_object(
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