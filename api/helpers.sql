/* create function */
CREATE OR REPLACE FUNCTION get_page()
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = page
AS $$
  ...
$$;

/* drop schema */
DROP SCHEMA featured;

/* change table schema */
ALTER TABLE featured.calendar SET SCHEMA home_featured;

/* search function */
SELECT routine_schema, routine_name, specific_name
FROM information_schema.routines
WHERE routine_name = 'get_blog';

/* deeply search function */
SELECT
    routine_schema,
    routine_name,
    specific_name,
    data_type
FROM information_schema.routines
WHERE routine_name = 'get_blog';

/* drop function possibilities */
DROP FUNCTION IF EXISTS get_blog();
DROP FUNCTION IF EXISTS get_blog(text);

/* reload scheme */
NOTIFY pgrst, 'reload schema';