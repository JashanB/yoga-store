DROP TABLE IF EXISTS teacher_events CASCADE;

CREATE TABLE teacher_events (
  teacher_id INTEGER REFERENCES teachers(id) ON DELETE CASCADE,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  PRIMARY KEY (teacher_id, event_id),
  teacher_sign_in BOOLEAN NOT NULL DEFAULT FALSE
);
