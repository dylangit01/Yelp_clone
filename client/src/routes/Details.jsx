import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import restaurantsFinder from '../api/restaurantsFinder';
import StarRating from '../components/StarRating';
import { RestaurantsContext } from '../context/contextAPI';

const Details = () => {
	const { id } = useParams();
	const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

	useEffect(() => {
		const fetchData = async (id) => {
			try {
				const response = await restaurantsFinder.get(`${id}`);
				setSelectedRestaurant(response.data.data.restaurant);

			} catch (err) {
				console.log(err);
			}
		};
		fetchData(id);
	}, [id, setSelectedRestaurant]);

	return (
		<div>
			{selectedRestaurant && <StarRating rating={4.4} />}
		</div>	
	)
};

export default Details;
