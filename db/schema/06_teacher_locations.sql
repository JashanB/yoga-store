DROP TABLE IF EXISTS teacher_locations CASCADE;

CREATE TABLE teacher_locations (
  teacher_id INTEGER REFERENCES teachers(id) ON DELETE CASCADE,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  PRIMARY KEY (teacher_id, location_id)
);
