CREATE OR REPLACE FUNCTION get_lab_calendar()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = lab
AS $$
SELECT json_build_object(
  'result', json_build_object(
    'calendar', json_strip_nulls(
      json_build_object(
        'desc', (
          SELECT jsonb_object_agg(lclds.type, lclds.desc ORDER BY lclds.id)
          FROM lab.calendar_desc lclds
        ),
        'text', (
          SELECT jsonb_object_agg(lclt.type, lclt.text ORDER BY lclt.id)
          FROM lab.calendar_text lclt
        ),
        'dates', (
          SELECT jsonb_object_agg(lcld.name, lcld.date ORDER BY lcld.id)
          FROM lab.calendar_dates lcld
        ),
        'details', (
          SELECT jsonb_agg(to_jsonb(lcldt) - 'id' ORDER BY lcldt.id)
          FROM lab.calendar_details lcldt
        )
      )
    )
  )
);
$$;