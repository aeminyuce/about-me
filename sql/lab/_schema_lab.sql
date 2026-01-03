-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE lab.intro (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  title text,
  subTitle text,
  leadText text,
  textPart1 text,
  textPart2 text,
  textPart3 text,
  images ARRAY,
  CONSTRAINT intro_pkey PRIMARY KEY (id)
);
CREATE TABLE lab.menu (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  to text,
  CONSTRAINT menu_pkey PRIMARY KEY (id)
);
CREATE TABLE lab.sidebar (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  sidebartitle text,
  CONSTRAINT sidebar_pkey PRIMARY KEY (id)
);