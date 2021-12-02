import React from 'react';
import "./Results.css";


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
				<form method = "POST" action = "/search">
				<div className = "Search_container">
					<h2>Search Dove</h2>
					<label> What to search? </label>
					<select name="dataSearch" id="dataSearch">
						<option value="username"> Usernames </option>
						<option value="interests"> Interests </option>
						<option value="personality"> Personality </option>
                        <option value="dob"> Date of Birth </option>
						<option value="location"> Location </option>
					</select><br />
					<label>Search</label>
					<input type = "text" name = "search" placeholder = "name"
					/>
					<br />
					<input type="submit" value = "Submit" />


				</div>
				</form> 
		
			</div>
		);
	}
}

export default Search