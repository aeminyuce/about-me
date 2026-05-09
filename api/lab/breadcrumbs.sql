CREATE OR REPLACE FUNCTION get_lab_breadcrumbs()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT jsonb_build_object(
  'result', jsonb_build_object(
    'breadcrumbs', jsonb_build_object(
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
);
$$;