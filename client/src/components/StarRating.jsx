import React from 'react';

const StarRating = ({rating}) => {
	const stars = [];
	let i = 1;
	while (i <= 5) {
		if (i <= rating) {
			stars.push(<i key={i} className="fas fa-star"></i>)
		} else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
			stars.push(<i key={i} className='fas fa-star-half-alt'></i>);
		} else {
			stars.push(<i key={i} className='far fa-star'></i>);
		}
		i++;
	}
	return (
		<>
			{stars}
		</>
	)
};

export default StarRating;
