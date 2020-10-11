DROP TABLE IF EXISTS user_giftcards CASCADE;

CREATE TABLE user_giftcards (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  giftcard_id INTEGER REFERENCES giftcards(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, giftcard_id),
  amount_remaining SMALLINT,
  amount_used SMALLINT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiration_date TIMESTAMP
);
