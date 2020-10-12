insert into users (email, password, cc, address) values ('a@a', 'xtx', '123', '7124 street');
insert into users (email, password, cc, address) values ('a@a', 'xtx', '123', '7124 street');
insert into users (email, password, cc, address) values ('a@a', 'xtx', '123', '7124 street');
insert into users (email, password, cc, address) values ('a@a', 'xtx', '123', '7124 street');
insert into users (email, password, cc, address) values ('a@a', 'xtx', '123', '7124 street');
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(100) NOT NULL,
  cc VARCHAR(20) NOT NULL,
  address VARCHAR(255) NOT NULL
);
