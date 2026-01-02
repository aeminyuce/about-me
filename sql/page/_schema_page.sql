-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE page.header_getintouch (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  qrCodeImage text,
  title text,
  messageStart text,
  messageHighlight text,
  messageEnd text,
  CONSTRAINT header_getintouch_pkey PRIMARY KEY (id)
);
CREATE TABLE page.header_headerlinks (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  to text,
  modal boolean,
  CONSTRAINT header_headerlinks_pkey PRIMARY KEY (id)
);
CREATE TABLE page.header_sociallinks (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  title text,
  url text,
  icon text,
  CONSTRAINT header_sociallinks_pkey PRIMARY KEY (id)
);