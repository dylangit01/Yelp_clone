import React, { useEffect, useContext } from 'react';
import restaurantsFinder from '../apis/restaurantsFinder'
import { RestaurantsContext } from '../context/contextAPI';

export const RestaurantsList = () => {
	// Destructuring setRestaurants from useContext
	const {restaurants, setRestaurants} = useContext(RestaurantsContext)

	useEffect(() => {
		// Do not directly using async in useEffect arrow function as useEffect doesn't any return value
		const fetchRestaurants = async () => {
			try {
				const response = await restaurantsFinder.get('/');
				console.log(response.data.data.restaurants);
				// Use useContext-setRestaurants to update restaurants
				setRestaurants(response.data.data.restaurants);
			} catch (err) {
				console.log(err);
			}
		};
		fetchRestaurants();
	}, [setRestaurants]);


	return (
		<div className='list-group text-center'>
			<table className='table table-dark table-hover'>
				<thead>
					<tr className='bg-primary'>
						<th scope='col'>Restaurant</th>
						<th scope='col'>Location</th>
						<th scope='col'>Price Range</th>
						<th scope='col'>Ratings</th>
						<th scope='col'>Edit</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{restaurants && restaurants.map(({ id, name, location, price_range }) => (
						<tr key={id}>
							<td className='align-middle'>{name}</td>
							<td className='align-middle'>{location}</td>
							<td className='align-middle'>{'$'.repeat(price_range)}</td>
							<td className='align-middle'>Rating</td>
							<td>
								<button className='btn btn-warning'>Update</button>
							</td>
							<td>
								<button className='btn btn-danger'>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
