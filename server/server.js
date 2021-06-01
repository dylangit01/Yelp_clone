import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'

const app = express();
dotenv.config();

// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(express.json())

// Middleware part, has to be put at the top, we can use middleware to send info back to user
// app.use('/api/restaurants', (req, res, next) => {
// 	console.log('this is middleware');
// 	next();
// });

// Morgan is a middleware log library:
app.use(morgan('dev'))

// Get all Restaurants
app.get('/api/restaurants', (req, res) => {
	// res.send('these are restaurants')
	res.status(200).json({
		status: 'success',
		data: {
			restaurant: ['wendys', 'mcdonalds']
		}
	});
})

app.get('/api/restaurants/:id', (req, res) => {
	console.log(req.params);
})

app.post('/api/restaurant', (req, res) => {
	console.log(req.body);
	res.json(req.body)
})

const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
	console.log(`Server is up and listening on port ${PORT}!`);
});
