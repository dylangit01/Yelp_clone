import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/getRestaurants', (req, res) => {
	// res.send('these are restaurants')
	res.status(201).json({
		status: 'success',
		restaurant: "Wendy's"
	})
})

const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
	console.log(`Server is up and listening on port ${PORT}!`);
});
