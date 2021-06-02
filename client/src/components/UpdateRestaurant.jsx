import React, {useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/contextAPI'
import restaurantsFinder from '../apis/restaurantsFinder';

const UpdateRestaurant = () => {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [price_range, setPriceRange] = useState('Price Range');

	// In order to make sure which restaurant with correct id that needs to be updated
	// react-router-dom has a hook called useParams can easily achieve that
	const { id } = useParams();
	
	// const { restaurant, setRestaurant } = useContext(RestaurantsContext);
	
	// We are not using contextAPI to fetch the specific restaurant in this page because if jump to this page's url directly(without previous went to the main page), it's restaurants list hasn't been fetched from database, which will show undefined, so in order solve this problem, we need to use useEffect to fetch the data whenever open the update page directly

	useEffect(() => {
		const fetchSingleRestaurantData = async (id) => {
			try {
				const response = await restaurantsFinder.get(`/${id}`)
				console.log(response.data.data.restaurant);
			} catch (err) {
				console.log(err);
			}
		};
		fetchSingleRestaurantData(id);
	}, [id])


	return (
		<div className='container'>
			<form>
				<div className='form-group'>
					<label htmlFor='name'>Restaurant Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						className='form-control'
						id='name'
						placeholder='Name'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='location'>Restaurant Location</label>
					<input
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						type='text'
						className='form-control'
						id='location'
						placeholder='Location'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='price_range'>Restaurant Price Range</label>
					<select
						value={price_range}
						onChange={(e) => setPriceRange(e.target.value)}
						className='form-control'
						id='price_range'
					>
						<option value='1'>$</option>
						<option value='2'>$$</option>
						<option value='3'>$$$</option>
						<option value='4'>$$$$</option>
						<option value='5'>$$$$$</option>
					</select>
				</div>

				<div className='form-group'>
					<label htmlFor='review'>Restaurant review</label>
					<textarea className='form-control' id='review' rows='3'></textarea>
				</div>
				<button className='btn btn-outline-primary'>Update</button>
			</form>
		</div>
	);
};

export default UpdateRestaurant;
