import { RepeatOneSharp } from '@mui/icons-material';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

class Search extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			searchInfo: [],
			searchRes: { },
			displayRes: false
		}; 
		this.handleInputChange = this.handleInputChange.bind(this);
	}


	async handleInputChange (event)
	{
		var searchBy = event.target.elements.search.value; 

		var dataSearch = {searchBy};
	
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
				response.json().then(function(json){
					console.log(json[0])
					this.setState({ searchRes: json[0] });
					this.setState({ displayRes: true})
				}.bind(this))

				return
			}
			throw new Error('Request failed')
		}.bind(this))
	};

	async findQuery(){
		
	}




	render() {
		var display = this.state.displayRes;

		let disSearch;

		if (!display){
			disSearch = <h1> No results</h1>
		}
		else{
			// disSearch = <h1> Found results </h1>
			disSearch = 
			<div className="suggested">
            <h1>Search Results</h1>
            <div class = "image-container">
                <img src={this.state.searchRes.profile_pic} alt='profile pic'/>
            </div>
            <h3>{this.state.searchRes.firstName}</h3>
            <h5>{this.state.searchRes.age}</h5>
            <p>{this.state.searchRes.bio}</p>

            <br></br>
			</div>
		}

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
				<div>
					{disSearch}
				</div>
			</div>
		);
	}
}

export default Search