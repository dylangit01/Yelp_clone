import React, {useState, createContext} from 'react'

export const RestaurantsContext = createContext();	// Used in different components

export const RestaurantsContextProvider = props => {		// Used in App.jsx to wrap all components

	// 1. Setup the main state that all components will use
	const [restaurants, setRestaurants] = useState([]);
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

	return (
		// Pass down the restaurants object AND the setRestaurants fn to every components, so that components
		// can also update the states, after this setup, goes to App component;
		<RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurant, deleteRestaurant }}>
			{props.children}
		</RestaurantsContext.Provider>
	);
}
