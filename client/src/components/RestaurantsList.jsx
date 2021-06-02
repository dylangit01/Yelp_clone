import React, { useEffect, useContext } from 'react';
import restaurantsFinder from '../apis/restaurantsFinder'
import { RestaurantsContext } from '../context/contextAPI';
import {useHistory} from 'react-router-dom'

export const RestaurantsList = () => {
	// Destructuring needed context values from useContext
	const {restaurants, setRestaurants, deleteRestaurant} = useContext(RestaurantsContext)

	useEffect(() => {
		// Do not directly using async in useEffect arrow function as useEffect doesn't any return value
		const fetchRestaurants = async () => {
			try {
				const response = await restaurantsFinder.get('/');

				// Use useContext-setRestaurants to update restaurants
				setRestaurants(response.data.data.restaurants);
			} catch (err) {
				console.log(err);
			}
		};
		fetchRestaurants();
	}, [setRestaurants]);

	const handelDelete = async (e, id) => {
		e.stopPropagation();
		try {
			await restaurantsFinder.delete(`/${id}`);
			deleteRestaurant(id)
		} catch (err) {
			console.log(err);
		}
	}

	// In order to route to update URL, we can use "history API" by import useHistory component;
	// This history represent the browser history, we can add URL to history stack
	let history = useHistory();
	const handleUpdate = (e,id) => {
		e.stopPropagation();
		history.push(`/restaurants/${id}/update`)
	}

	// Handle restaurant details page
	const handleRestaurantDetails = id => {
		history.push(`/restaurants/${id}`);
	}

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
						<tr onClick={()=> handleRestaurantDetails(id)} key={id}>
							<td className='align-middle'>{name}</td>
							<td className='align-middle'>{location}</td>
							<td className='align-middle'>{'$'.repeat(price_range)}</td>
							<td className='align-middle'>Reviews</td>
							<td>
								{/* Create onClick event to handle update */}
								<button onClick={(e)=> handleUpdate(e,id)} className='btn btn-warning'>Update</button>
							</td>
							<td>
								<button onClick={(e) => handelDelete(e,id)} className='btn btn-danger'>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
