CREATE OR REPLACE FUNCTION get_home()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = home
AS $$
SELECT json_build_object(
  'result', json_build_object(
    'aboutMe', (
      SELECT to_jsonb(abm) - 'id'
      FROM home.aboutme abm
      LIMIT 1
    ),
    'nav', json_build_object(
      'navLinks', (
        SELECT json_agg(to_jsonb(nsl) - 'id' ORDER BY nsl.id)
        FROM home.nav_navlinks nsl
      ),
      'themeList', (
        SELECT json_agg(to_jsonb(ntl) - 'id' ORDER BY ntl.id)
        FROM home.nav_themelist ntl
      )
    )
  )
);
$$;