-- echo 'export PATH="/usr/local/sbin:$PATH"' >> ~/.zshrc

DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE reviews (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
	name VARCHAR(225) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL check(rating >=1 AND rating <= 6)
);