DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  address VARCHAR(255) NOT NULL
);
-- yoga tree richmond and spadina
