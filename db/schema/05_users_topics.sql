DROP TABLE IF EXISTS user_topics CASCADE;

CREATE TABLE user_topics(
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  topic_id INTEGER REFERENCES topics(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, topic_id)
);



