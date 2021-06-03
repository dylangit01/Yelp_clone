-- echo 'export PATH="/usr/local/sbin:$PATH"' >> ~/.zshrc

DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(225) NOT NULL,
	location VARCHAR(225) NOT NULL,
	price_range INTEGER NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);


INSERT INTO restaurants (name, location, price_range) values ('Wendys', 'New Yorks', 3);

UPDATE restaurants SET name = 'red lobster', location = 'miami', price_range=3 where id = 2;

CREATE TABLE reviews (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
	name VARCHAR(225) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL check(rating >=1 AND rating <= 6)
);

INSERT INTO reviews (name, review, rating) values ('carl', 'restaurant was awesome', 5);