DROP TABLE IF EXISTS companys CASCADE;

CREATE TABLE companys (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  billingAddress VARCHAR(255) NOT NULL,
  cc VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  subscription_id INTEGER REFERENCES subscriptions(id) ON DELETE CASCADE,
  subscription_active BOOLEAN NOT NULL DEFAULT FALSE,
  subscription_start TIMESTAMP,
  subscription_expiration TIMESTAMP
);
