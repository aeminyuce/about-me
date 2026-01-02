CREATE OR REPLACE FUNCTION get_home_featured()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = home_featured
AS $$
SELECT json_build_object(
  'result', json_build_object(
    'profile', json_build_object(
      'info', (
        SELECT to_jsonb(pin) - 'id'
        FROM home_featured.profile_info pin
        LIMIT 1
      ),
      'userActivity', (
        SELECT json_agg(to_jsonb(pua))
        FROM home_featured.profile_useractivity pua
      )
    ),
    'reports', json_build_object(
      'l', (
        SELECT to_jsonb(rel) - 'id'
        FROM home_featured.reports_l rel
        LIMIT 1
      ),
      'r', (
        SELECT to_jsonb(rer) - 'id'
        FROM home_featured.reports_r rer
        LIMIT 1
      )
    ),
    'reportsList', json_build_object(
      'delayed', (
        SELECT json_agg(to_jsonb(rld) - 'id')
        FROM home_featured.reportslist_delayed rld
      ),
      'paused', (
        SELECT json_agg(to_jsonb(rlp) - 'id')
        FROM home_featured.reportslist_paused rlp
      )
    ),
    'people', json_strip_nulls(
      json_build_object(
        'cardTitle', (
          SELECT cardtitle
          FROM home_featured.people
          LIMIT 1
        ),
        'addPeople', (
          SELECT to_jsonb(pap) - 'id'
          FROM home_featured.people_addpeople pap
          LIMIT 1
        ),
        'list', (
          SELECT json_agg(to_jsonb(pli) - 'id')
          FROM home_featured.people_list pli
        )
      )
    ),
    'peopleMore', (
      SELECT jsonb_strip_nulls(
        jsonb_build_object(
          'moreBtnText', pmr.morebtntext,
          'moreUrl', pmr.moreurl,
          'moreCount', pmr.morecount,
          'list', (
            SELECT jsonb_agg(to_jsonb(pml) - 'id') 
            FROM home_featured.peoplemore_list pml
          )
        )
      )
      FROM home_featured.peoplemore pmr
      LIMIT 1
    ),
    'calendar', (
      SELECT jsonb_build_object(
        'cardTitle', cln.cardtitle,
        'eventsDate', cln.eventsdate,
        'title', cln.title,
        'settings', cln.settings,
        'events', (
          SELECT jsonb_agg(to_jsonb(cle) - 'id')
          FROM home_featured.calendar_events cle
        )
      )
      FROM home_featured.calendar cln
      LIMIT 1
    )
  )
);
$$;