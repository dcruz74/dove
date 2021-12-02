import React, { useState } from 'react';



async function getSearch() {
	const response = await fetch('/search');
	const data = await response.json();
	return data;
  }


class Search extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			searchInfo: []
		}; 
	}


	handleInputChange = (event) => 
	{
		event.preventDefault();
		const { value } = event.target;
		console.log('Value', value)
		this.setState({
		  query: value
		});
	



		var user = getSearch();
		user.then(function(result){

			console.log(result); 
		})
		
		
		//this.search(value);



	
	}; 

	

	/*
	  search = query => {
		axios.get('http://localhost:3001/getData')
		 .then(res =>{
		  const searchInfo = (res.data || []).map(obj => ({ 
			company: obj.companyName,
			sinage: obj.sinageCodes,
			method: obj.Method,
			notes: obj.Notes}));
  
  
			this.setState({ searchInfo });
		 })
	  };

	  **/ 

	 


	render() {
		return (
			<div>
				<form //</div>method = "POST" action = "/search">
				>
				<div className = "Search_container">
					<h2>Search Dove</h2>
					<label>Search for a User!</label>
					<input type = "text" name = "search" placeholder = "name"
					/>
					<br />
					<input type="submit" onChange={this.handleInputChange} value = "Submit" />


				</div>
				</form> 
		
			</div>
		);
	}
}

export default Search