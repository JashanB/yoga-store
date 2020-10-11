DROP TABLE IF EXISTS memberships CASCADE;

CREATE TABLE memberships (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT,
  price SMALLINT NOT NULL,
  available BOOLEAN NOT NULL DEFAULT TRUE,
  promotion_code VARCHAR(255),
  is_unlimited BOOLEAN NOT NULL DEFAULT FALSE,
  session_num SMALLINT
);
