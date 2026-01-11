-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE home.aboutme (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  location text,
  getInTouchText text,
  personalSkills ARRAY,
  myFocus text,
  CONSTRAINT aboutme_pkey PRIMARY KEY (id)
);
CREATE TABLE home.nav_navlinks (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  to text,
  CONSTRAINT nav_navlinks_pkey PRIMARY KEY (id)
);
CREATE TABLE home.nav_themelist (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  theme text,
  CONSTRAINT nav_themelist_pkey PRIMARY KEY (id)
);