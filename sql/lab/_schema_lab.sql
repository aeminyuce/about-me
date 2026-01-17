-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE lab.intro (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  title text,
  subtitle text,
  leadtext text,
  textpart1 text,
  textpart2 text,
  textpart3 text,
  CONSTRAINT intro_pkey PRIMARY KEY (id)
);
CREATE TABLE lab.intro_images (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  img text,
  url text,
  CONSTRAINT intro_images_pkey PRIMARY KEY (id)
);
CREATE TABLE lab.menu (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  to text,
  titles ARRAY,
  CONSTRAINT menu_pkey PRIMARY KEY (id)
);
CREATE TABLE lab.sidebar (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  sidebartitle text,
  CONSTRAINT sidebar_pkey PRIMARY KEY (id)
);