import React, { useState } from 'react';


async function getUserData(){
    const response = await fetch('/search');
    const data = await response.json();
    return data;
}




function Search() {

	const[username, setUser] = useState(""); 

	var user = getUserData();


	user.then(function(result){
        // Will print the first name of the current user
        // TODO:
        // - Display the name, email, etc. on the myprofile card
        console.log(result.firstName);

        //setFirstName(result.firstName); 
    
    })


	//render() {
		return (
			<div>
				<form method = "POST" action = "/search">
				<div className = "Search_container">
					<h2>Search Dove</h2>
					<label>Search for a User!</label>
					<input type = "text" name = "search" placeholder = "name"
					/>
					<br />
					<input type="submit" value = "Submit" />


				</div>
				</form> 
		
			</div>
		);
	//}
}

export default Search