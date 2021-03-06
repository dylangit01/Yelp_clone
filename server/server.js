import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import db from './db/index.js'	// ES6 module has to have a completed path

const app = express();
dotenv.config();

// Setup CORS middleware
app.use(cors())

// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(express.json());

// Middleware part, has to be put at the top, we can use middleware to send info back to user
// app.use('/api/restaurants', (req, res, next) => {
// 	console.log('this is middleware');
// 	next();
// });

// Morgan is a middleware log library:
app.use(morgan('dev'))

// Get all Restaurants
app.get('/api/restaurants', async (req, res) => {
	try {
		const results = await db.query("select * from restaurants")		//db.query is a promise
		
		res.status(200).json({
			status: 'success',
			results: results.rows.length,
			data: {
				restaurants: results.rows
			}
		});
	} catch (err) {
		console.log(err);
	}
})

// Get single Restaurant
app.get('/api/restaurants/:id', async (req, res) => {
	try {
		// Parameterized query, bad practice to use template string in db.query directly
		const text = 'select * from restaurants where id = $1';
		const values = [req.params.id]
		const result = await db.query(text, values)

		res.status(200).json({
			status: 'success',
			data: {
				restaurant: result.rows[0],
			},
		});
	} catch (err) {
		console.log(err);
	}
})

// Create a Restaurant
app.post('/api/restaurants', async (req, res) => {
	try {
		const { name, location, price_range } = req.body;
		const result = await db.query(
			'INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) RETURNING *',
			[name, location, price_range])

		res.status(201).json({
			status: 'success',
			data: {
				restaurant: result.rows[0]
			}
		})
	} catch (err) {
		console.log(err);
	}
})

// Update a Restaurant
app.put('/api/restaurants/:id', async (req, res) => {
	try {
		const { name, location, price_range } = req.body;
		const result = await db.query(
			'UPDATE restaurants SET name = $1, location = $2, price_range= $3 where id = $4 RETURNING *',
			[name, location, price_range, req.params.id]);
		
		res.status(201).json({
			status: 'success',
			data: {
				restaurant: result.rows[0]
			}
		});
	} catch (err) {
		console.log(err);
	}
})

// Delete a Restaurant
app.delete('/api/restaurants/:id', async (req, res) => {
	try {
		const result = await db.query('DELETE FROM restaurants where id = $1', [req.params.id]);
		res.status(204).json({
			status: 'success',
		})
	} catch (err) {
		console.log(err);
	}
})

const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
	console.log(`Server is up and listening on port ${PORT}!`);
});
