DROP TABLE IF EXISTS user_memberships CASCADE;

CREATE TABLE user_memberships (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  membership_id INTEGER REFERENCES memberships(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, membership_id),
  num_remaining TINYINT,
  num_used TINYINT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiration_date TIMESTAMP,

);
