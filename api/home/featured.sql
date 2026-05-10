CREATE OR REPLACE FUNCTION get_home_featured()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = home_featured
AS $$
SELECT jsonb_build_object(
  'result', jsonb_build_object(
    'profile', jsonb_build_object(
      'info', (
        SELECT to_jsonb(pin) - 'id'
        FROM home_featured.profile_info pin
        LIMIT 1
      ),
      'userActivity', (
        SELECT jsonb_agg(to_jsonb(pua) - 'id' ORDER BY pua.id)
        FROM home_featured.profile_useractivity pua
      )
    ),
    'reports', jsonb_build_object(
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
    'reportsList', jsonb_build_object(
      'delayed', (
        SELECT jsonb_agg(to_jsonb(rld) - 'id' ORDER BY rld.id)
        FROM home_featured.reportslist_delayed rld
      ),
      'paused', (
        SELECT jsonb_agg(to_jsonb(rlp) - 'id' ORDER BY rlp.id)
        FROM home_featured.reportslist_paused rlp
      )
    ),
    'people', jsonb_strip_nulls(
      jsonb_build_object(
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
          SELECT jsonb_agg(to_jsonb(pli) - 'id' ORDER BY pli.id)
          FROM home_featured.people_list pli
        )
      )
    ),
    'peopleMore', ( SELECT
      (
        SELECT to_jsonb(pmr) - 'id'
        FROM home_featured.peoplemore pmr
        LIMIT 1
      ) ||
      jsonb_strip_nulls(
        jsonb_build_object(
          'list', (
            SELECT jsonb_agg(to_jsonb(pml) - 'id' ORDER BY pml.id)
            FROM home_featured.peoplemore_list pml
          )
        )
      )
    ),
    'foods', (
      SELECT to_jsonb(fds) - 'id'
      FROM home_featured.foods fds
      LIMIT 1
    ),
    'race', (
      SELECT to_jsonb(rac) - 'id'
      FROM home_featured.race rac
      LIMIT 1
    ),
    'calendar', ( SELECT
      (
        SELECT to_jsonb(cln) - 'id'
        FROM home_featured.calendar cln
        LIMIT 1
      ) ||
      jsonb_build_object(
        'events', (
          SELECT jsonb_agg(to_jsonb(lcldt) - 'id' ORDER BY lcldt.id)
          FROM lab.calendar_details lcldt
        )
      )
    ),
    'travel', (
      SELECT to_jsonb(trv) - 'id'
      FROM home_featured.travel trv
      LIMIT 1
    ),
    'alerts', (
      SELECT to_jsonb(alr) - 'id'
      FROM home_featured.alerts alr
      LIMIT 1
    )
  )
);
$$;