DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  company_id INTEGER REFERENCES companys(id) ON DELETE CASCADE,
  address VARCHAR(255) NOT NULL
);
