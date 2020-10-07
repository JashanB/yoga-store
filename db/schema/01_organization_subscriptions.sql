DROP TABLE IF EXISTS organization_subscriptions CASCADE;

CREATE TABLE organization_subscriptions (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  cost SMALLINT NOT NULL,
  description TEXT,
  duration(mo) SMALLINT NOT NULL,
  is_available BOOLEAN NOT NULL DEFAULT TRUE,
);
