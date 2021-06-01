DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(225) NOT NULL,
	location VARCHAR(225) NOT NULL,
	price_range INTEGER NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);


INSERT INTO restaurants (name, location, price_range) values ('Wendys', 'New Yorks', 3);

