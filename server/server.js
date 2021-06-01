import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import db from './db/index.js'	// ES6 module has to have a completed path

const app = express();
dotenv.config();

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
		
		// res.send('these are restaurants')
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

app.get('/api/restaurants/:id', (req, res) => {
	console.log(req.params.id);
	res.status(200).json({
		status: 'success',
		data: {
			restaurant: 'Burger King'
		}
	})
})

// Create a Restaurant
app.post('/api/restaurants', (req, res) => {
	console.log(req.body);
	res.status(201).json(req.body)
})

// Update a Restaurant
app.put('/api/restaurants/:id', (req, res) => {
	console.log(req.params.id);
	res.status(200).json(req.body)
})

// Delete a Restaurant
app.delete('/api/restaurants/:id', (req, res) => {
	res.status(204).json({
		status:'success'
	})
})

const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
	console.log(`Server is up and listening on port ${PORT}!`);
});
