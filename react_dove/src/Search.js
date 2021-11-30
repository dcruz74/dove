import React from 'react';

class Search extends React.Component	{
	constructor() {
		super() 
		this.state = {
			search_query: '',
		} 
	}

	render() {
		return (
			<div>
				<form method = "POST" action = "/results">
				<div className = "Search_container">
					<h2>Search User</h2>
					
					<label>Search</label>
					<input type = "text" name = "search profiles" placeholder = "name"
					/>

					<br></br><br></br>
					<input type= 'submit' value= 'Submit'/>

				</div>
				</form> 
		
			</div>
		);
	}
}

export default Search