DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(100) NOT NULL,
  cc VARCHAR(20) NOT NULL,
  address VARCHAR(255) NOT NULL
);
