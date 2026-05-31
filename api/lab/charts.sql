CREATE OR REPLACE FUNCTION get_lab_charts()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT jsonb_build_object(
  'result', jsonb_build_object(
    'charts', jsonb_build_object(
      'desc', (
        SELECT jsonb_object_agg(lchd.type, lchd.desc ORDER BY lchd.id)
        FROM lab.charts_desc lchd
      ),
      'text', (
        SELECT jsonb_object_agg(lcht.type, lcht.text ORDER BY lcht.id)
        FROM lab.charts_text lcht
      ),
      'value', (
        SELECT jsonb_object_agg(lcvt.name, lcvt.value ORDER BY lcvt.id)
        FROM lab.charts_value lcvt
      )
    )
  )
);
$$;