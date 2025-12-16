-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE home.calendar (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  cardtitle text,
  eventsdate text,
  title text,
  settings ARRAY,
  CONSTRAINT calendar_pkey PRIMARY KEY (id)
);
CREATE TABLE home.calendar_events (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  year numeric,
  month numeric,
  day numeric,
  dayName text,
  details jsonb,
  CONSTRAINT calendar_events_pkey PRIMARY KEY (id)
);
CREATE TABLE home.people (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  cardtitle text,
  CONSTRAINT people_pkey PRIMARY KEY (id)
);
CREATE TABLE home.people_addpeople (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  icon text,
  title text,
  CONSTRAINT people_addpeople_pkey PRIMARY KEY (id)
);
CREATE TABLE home.people_list (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  avatarText text,
  jobTitle text,
  description text,
  url text,
  avatar text,
  CONSTRAINT people_list_pkey PRIMARY KEY (id)
);
CREATE TABLE home.peoplemore (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  morebtntext text,
  moreurl text,
  morecount numeric,
  CONSTRAINT peoplemore_pkey PRIMARY KEY (id)
);
CREATE TABLE home.peoplemore_list (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  avatarText text,
  jobTitle text,
  avatar text,
  CONSTRAINT peoplemore_list_pkey PRIMARY KEY (id)
);
CREATE TABLE home.profile_info (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  avatar text,
  name text,
  email text,
  type text,
  CONSTRAINT profile_info_pkey PRIMARY KEY (id)
);
CREATE TABLE home.profile_useractivity (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  time text,
  activity text,
  CONSTRAINT profile_useractivity_pkey PRIMARY KEY (id)
);
CREATE TABLE home.reports_l (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  reports numeric,
  percent text,
  progressPercent numeric,
  CONSTRAINT reports_l_pkey PRIMARY KEY (id)
);
CREATE TABLE home.reports_r (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  reports numeric,
  percent text,
  progressPercent numeric,
  CONSTRAINT reports_r_pkey PRIMARY KEY (id)
);
CREATE TABLE home.reportslist_delayed (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  percent text,
  reports text,
  chartPercent numeric,
  CONSTRAINT reportslist_delayed_pkey PRIMARY KEY (id)
);
CREATE TABLE home.reportslist_paused (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  percent text,
  reports text,
  chartPercent numeric,
  CONSTRAINT reportslist_paused_pkey PRIMARY KEY (id)
);