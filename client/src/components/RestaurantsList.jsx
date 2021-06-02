import React, { useEffect } from 'react';
import restaurantsFinder from '../apis/restaurantsFinder'

export const RestaurantsList = () => {

	useEffect(() => {
		try {
			const fetchRestaurants = async () => {
				const response = await restaurantsFinder.get('/')
				console.log(response);
			}
			fetchRestaurants();
		} catch (err) {

		};
	},[])


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
					<tr>
						<td className='align-middle'>McDonalds</td>
						<td className='align-middle'>New York</td>
						<td className='align-middle'>$$</td>
						<td className='align-middle'>Rating</td>
						<td>
							<button className='btn btn-warning'>Update</button>{' '}
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>{' '}
						</td>
					</tr>

					<tr>
						<td className='align-middle'>McDonalds</td>
						<td className='align-middle'>New York</td>
						<td className='align-middle'>$$</td>
						<td className='align-middle'>Rating</td>
						<td>
							<button className='btn btn-warning '>Update</button>{' '}
						</td>
						<td>
							<button className='btn btn-danger '>Delete</button>{' '}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
