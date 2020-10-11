DROP TABLE IF EXISTS user_class_waitlist CASCADE;

CREATE TABLE user_class_waitlist (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, class_id),
  reservation_position SERIAL
);
