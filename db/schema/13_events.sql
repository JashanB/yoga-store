DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  teachers_required SMALLINT NOT NULL,
  teachers_allotted SMALLINT,
  price SMALLINT NOT NULL,
  max_spots SMALLINT NOT NULL,
  spots_remaining SMALLINT,
  is_cancelled BOOLEAN NOT NULL DEFAULT FALSE
);
