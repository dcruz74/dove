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


	handleInputChange(e) 
	{

		var searchBy = e.target.elements.search.value; 
		// let searchBody = {
		// 	search: event.target.elements.search.value
		// }

		var data = {searchBy};

		// event.preventDefault();
		// const { value } = event.target;
		// console.log('Value', value)
		// this.setState({
		//   query: value
		// });
	
		console.log('Entered input change');

		// return fetch('/search/?search=' + event.target.elements.search.value
		// )
		// .then(res => res.json())
		// .then(data => console.log(data));

		(async () =>{
			const rawResponse = await fetch('/search',{
				method: 'POST',
				body: JSON.stringify({search: 'monkeyryan3' }),
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				
			});

			const data = await rawResponse.json();

			// body: JSON.stringify(searchBody)
			console.log(data);

		})();

		// fetch('/search', {
		// 	method: 'POST',
		// 	headers:{
		// 		'Content-Type':'application/json'
		// 	},
		// 	body: JSON.stringify(data)
		// })
		// .then(function(response){
		// 	console.log(response);
		// })

		// console.log(event.target.elements.search.value);



		// var user = getSearch();
		// user.then(function(result){
		// 	console.log(result); 
		// })
		
		
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
				<form onSubmit={this.handleInputChange} //action="#" //</div>method = "POST" action = "/search">
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