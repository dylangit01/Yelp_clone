import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:3050/api/restaurants',			// Don't put "/" afterwards
});
