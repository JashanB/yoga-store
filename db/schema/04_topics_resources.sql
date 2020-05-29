DROP TABLE IF EXISTS topics_resources CASCADE;

CREATE TABLE topics_resources (
  topic_id INTEGER REFERENCES topics(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  PRIMARY KEY (topic_id, resource_id)
);
