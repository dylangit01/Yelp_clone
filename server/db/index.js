// const { Pool } = require('pg');		Changed to 
import pg from 'pg';
const { Pool } = pg;

// Connect to PostgreSQL:
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'yelp',
	password: 'postgres123',
	port: 5433,
});

export default {
	query: (text, params) => pool.query(text, params),
};
