DROP DATABASE IF EXISTS boardgames_dev;
CREATE DATABASE boardgames_dev;

\c boardgames_dev;

CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    players NUMERIC NOT NULL,
    level TEXT,
    duration NUMERIC,
    two_more BOOLEAN
);