DROP TABLE IF EXISTS classes CASCADE;

CREATE TABLE classes (
  id SERIAL PRIMARY KEY NOT NULL,
  teacher_id INTEGER REFERENCES teachers(id) ON DELETE CASCADE,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  teacher_sign_in BOOLEAN NOT NULL DEFAULT FALSE,
  start_datetime DATETIME NOT NULL,
  end_datetime DATETIME NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  duration_min SMALLINT NOT NULL,
  max_spots SMALLINT NOT NULL,
  spots_remaining SMALLINT,
  is_cancelled BOOLEAN NOT NULL DEFAULT FALSE
);