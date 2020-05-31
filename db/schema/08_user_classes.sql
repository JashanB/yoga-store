DROP TABLE IF EXISTS user_classes CASCADE;

CREATE TABLE user_classes (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, class_id),
  signed_in BOOLEAN NOT NULL DEFAULT FALSE,
  paymed_method VARCHAR(255) NOT NULL
);
