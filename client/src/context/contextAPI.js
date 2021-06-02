import React, {useState, createContext} from 'react'

export const RestaurantsContext = createContext();	// Used in different components

export const RestaurantsContextProvider = props => {		// Used in App.jsx to wrap all components

	// 1. Setup the main state that all components will use
	const [restaurants, setRestaurants] = useState([]);
	// 2. Create actions that create/update/delete the main state; (or any other actions to affect states )

	// 2.1 Create addRestaurant fn to update restaurants using spread operator
	// DON'T forget to pass it down to the context Provider value
	const addRestaurants = (restaurant) => {
		setRestaurants([...restaurants, restaurant])
	}


	return (
		// Pass down the restaurants object AND the setRestaurants fn to every components, so that components
		// can also update the states, after this setup, goes to App component;
		<RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurants }}>
			{props.children}
		</RestaurantsContext.Provider>
	);
}
