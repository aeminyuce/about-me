CREATE OR REPLACE FUNCTION get_lab_card()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT json_build_object(
  'result', json_build_object(
    'card', json_strip_nulls(
      json_build_object(
        'desc', (
          SELECT jsonb_object_agg(lcd.type, lcd.desc ORDER BY lcd.id)
          FROM lab.card_desc lcd
        ),
        'text', (
          SELECT jsonb_object_agg(lct.type, lct.text ORDER BY lct.id)
          FROM lab.card_text lct
        ),
        'img', (
          SELECT json_agg(lci.name ORDER BY lci.id)
          FROM lab.card_img lci
        )
      )
    )
  )
);
$$;