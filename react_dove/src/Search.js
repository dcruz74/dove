import { RepeatOneSharp } from '@mui/icons-material';
import React, { useState } from 'react';



async function getSearch() {
	const response = await fetch('/search')
	const data = await response.json();
	return data;
  }


class Search extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			searchInfo: []
		}; 
		this.handleInputChange = this.handleInputChange.bind(this);
	}


	handleInputChange = (event) =>
	{

		var searchBy = event.target.elements.search.value; 
		// let searchBody = {
		// 	search: event.target.elements.search.value
		// }

		var dataSearch = {searchBy};

		// event.preventDefault();
		// const { value } = event.target;
		// console.log('Value', value)
		// this.setState({
		//   query: value
		// });
	
		console.log('Entered input change');

		fetch('/searchUsers', {
			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify(dataSearch)
		})
		.then(function(response){
			if(response.ok){
				// Returns an array of found users
				response.json().then(json =>{
					console.log(json)
				})
				return
			}
			throw new Error('Request failed')
		})

	
	}; 


	render() {
		return (
			<div>
				<form onSubmit={this.handleInputChange} action="#" //</div>method = "POST" action = "/search">
				>
				<div className = "Search_container">
					<h2>Search Dove</h2>
					<label>Search for a User!</label>
					<input type = "text" name = "search" placeholder = "name"
					/>
					<br />
					<input type="submit"  value = "Submit" />


				</div>
				</form> 
		
			</div>
		);
	}
}

export default Search