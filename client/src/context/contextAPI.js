import React, {useState, createContext} from 'react'

export const RestaurantsContext = createContext();	// Used in different components

export const RestaurantsContextProvider = props => {		// Used in App.jsx to wrap all components

	// 1. Setup the main states that all components will use
	const [restaurants, setRestaurants] = useState([]);
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);
	// 2. Create actions that create/update/delete the main state; (or any other actions to affect states )

	// 2.1 Create addRestaurant fn to update restaurants using spread operator
	// DON'T forget to pass it down to the context Provider value
	const addRestaurant = (restaurant) => {
		setRestaurants([...restaurants, restaurant])
	}

	// 2.2 Create deleteRestaurant fn to update restaurants using filter fn
	// DON'T forget to pass this fn down to the context Provider value
	const deleteRestaurant = (id) => {
		setRestaurants(restaurants.filter(item => item.id !== id))
	}
 
	// Not need for below function in update page as setRestaurant in useEffect, will be triggered whenever the restaurants change
	// 2.3 Create updateRestaurant fn to update single restaurant
	// const updateRestaurant = (id, response) => {
	// 	const { name, location, price_range } = response.data.data.restaurant;
	// 	return restaurants.map(rest=> rest.id === id ? {...rest, name, location, price_range} : rest )
	// }

	return (
		// Pass down the restaurants object AND the setRestaurants fn to every components, so that components
		// can also update the states, after this setup, goes to App component;
		<RestaurantsContext.Provider
			value={{
				restaurants,
				setRestaurants,
				addRestaurant,
				deleteRestaurant,
				selectedRestaurant,
				setSelectedRestaurant,
			}}
		>
			{props.children}
		</RestaurantsContext.Provider>
	);
}
