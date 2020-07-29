import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');
	
	const onSubmit = event => {
		event.preventDefault();	
		onFormSubmit(term)
	}
	
	return (
		<div className="ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field"></div>
				<label htmlFor="">Video Search: 
					<input 
						value={term} 
						type="text" 
						onChange={(e) => {setTerm(e.target.value)}}
					/>
				</label>
			</form>
		</div>
	)
}

export default SearchBar;