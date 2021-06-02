import React, { useState } from 'react';

const AddRestaurant = () => {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState('Price Range');

	return (
		<div className='mb-4'>
			<form action=''>
				<div className='row'>
					<div className='col'>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type='text'
							className='form-control'
							placeholder='name'
						/>
					</div>
					<div className='col'>
						<input
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							type='text'
							className='form-control'
							placeholder='location'
						/>
					</div>
					<div className='col'>
						<select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className='form-control mr-sm-2'>
							<option disabled>Price Range</option>
							<option value='1'>$</option>
							<option value='2'>$$</option>
							<option value='3'>$$$</option>
							<option value='4'>$$$$</option>
							<option value='5'>$$$$$</option>
						</select>
					</div>
					<button className='btn btn-primary col-auto mr-2'>Add</button>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;
