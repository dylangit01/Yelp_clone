-- echo 'export PATH="/usr/local/sbin:$PATH"' >> ~/.zshrc

-- Below codes run at psql environment:

DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(225) NOT NULL,
	location VARCHAR(225) NOT NULL,
	price_range INTEGER NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);

