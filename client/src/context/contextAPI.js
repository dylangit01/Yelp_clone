import React, {useState, createContext} from 'react'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
	const [restaurants, setRestaurants] = useState([]);

	return (
		// Pass down the restaurants object AND the setRestaurants fn to every components, so that components
		// can also update the states, after this setup, goes to App component;
		<RestaurantsContext.Provider value={{restaurants, setRestaurants}}>
			{props.children}
		</RestaurantsContext.Provider>
	)
}
