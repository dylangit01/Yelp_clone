import React, { useState, useContext } from 'react';
import restaurantsFinder from '../apis/restaurantsFinder';
import { RestaurantsContext } from '../context/contextAPI';

const AddRestaurant = () => {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [price_range, setPriceRange] = useState('Price Range');

	// Import useContext & RestaurantsContext and destructuring addRestaurant fn
	const { addRestaurant } = useContext(RestaurantsContext);

	const handleSubmit = async (e) => {
		// 1. prevent reloading the page, otherwise losing state
		e.preventDefault();

		// 2. Use try block and axios api to send post request with input data and save in response variable
		try {
			const response = await restaurantsFinder.post('/', {
				name,
				location,
				price_range,
			});

			// 3. Use contextAPI to update restaurant list globally
			addRestaurant(response.data.data.restaurant);

			// 4. Reset the input value
			setName('');
			setLocation('');
			setPriceRange('Price Range');
			
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='mb-4'>
			<form onSubmit={handleSubmit}>
				<div className='row'>
					<div className='col'>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type='text'
							className='form-control'
							placeholder='name'
						/>
					</div>
					<div className='col'>
						<input
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							type='text'
							className='form-control'
							placeholder='location'
						/>
					</div>
					<div className='col'>
						<select
							value={price_range}
							onChange={(e) => setPriceRange(e.target.value)}
							className='form-control mr-sm-2'
						>
							<option disabled>Price Range</option>
							<option value='1'>$</option>
							<option value='2'>$$</option>
							<option value='3'>$$$</option>
							<option value='4'>$$$$</option>
							<option value='5'>$$$$$</option>
						</select>
					</div>
					<button className='btn btn-primary col-auto mr-2'>Add</button>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;
