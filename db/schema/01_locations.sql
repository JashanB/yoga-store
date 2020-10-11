DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);
-- yoga tree richmond and spadina
