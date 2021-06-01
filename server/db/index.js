// const { Pool } = require('pg');		Changed to
import pg from 'pg';
const { Pool } = pg;

// Connect to PostgreSQL, and if setup .env for credentials, pg is smart enough to get them without
// write process.env....
// const pool = new Pool({
// 	user: 'postgres',
// 	host: 'localhost',
// 	database: 'yelp',
// 	password: '...',
// 	port: 5433,
// });

const pool = new Pool();

export default {
	query: (text, params) => pool.query(text, params),
};
