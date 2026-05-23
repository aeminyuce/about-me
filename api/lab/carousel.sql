CREATE OR REPLACE FUNCTION get_lab_carousel()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT jsonb_build_object(
  'result', jsonb_build_object(
    'carousel', jsonb_build_object(
      'desc', (
        SELECT jsonb_object_agg(lcrd.type, lcrd.desc ORDER BY lcrd.id)
        FROM lab.carousel_desc lcrd
      ),
      'text', (
        SELECT jsonb_object_agg(lcrt.type, lcrt.text ORDER BY lcrt.id)
        FROM lab.carousel_text lcrt
      ),
      'img', (
        SELECT jsonb_agg(lcri.name ORDER BY lcri.id)
        FROM lab.carousel_img lcri
      )
    )
  )
);
$$;