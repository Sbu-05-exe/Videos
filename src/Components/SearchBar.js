import React from 'react';

class SearchBar extends React.Component {
	state = {term: ''}

	onFormSubmit = event => {
		event.preventDefault();

		// Make sure we call callback from parent component
		
		this.props.onFormSubmit(this.state.term)
	}

	onInputChange = event => {
		const term = event.target.value;
		this.setState({term})
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field"></div>
					<label htmlFor="">Video Search: 
						<input 
							value={this.state.term} 
							type="text" 
							onChange={this.onInputChange}
						/>
					</label>
				</form>
			</div>
		)
	}
}

export default SearchBar;