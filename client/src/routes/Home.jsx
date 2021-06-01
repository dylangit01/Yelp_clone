import React from 'react'
import AddRestaurant from '../components/AddRestaurant';
import Header from '../components/Header';
import { RestaurantsList } from '../components/RestaurantsList';

const Home = () => {
	return (
		<div className="container">
			<Header />
			<AddRestaurant />
			<RestaurantsList />
		</div>
	)
}

export default Home
