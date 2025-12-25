-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE lab.menu (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  to text,
  CONSTRAINT menu_pkey PRIMARY KEY (id)
);