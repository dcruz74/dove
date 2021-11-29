import React from 'react';

class Login extends React.Component	{
	constructor() {
		super() 
		this.state = {
			username: '',
			password: '', 
			forgotPassword: false,
		} 

		this.changeUserName = this.changeUserName.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

	}


	changeUserName(event) {
		this.setState({
			username: event.target.value
		})
	}

	changePassword(event) {
		this.setState({
			password: event.target.value
		})
	}

	onSubmit(event) {
		event.preventDefault() //prevents form from refreshing
		const registered = {
			username: this.state.username,
			password: this.state.password, 
		}



		//SEND THIS REGISTERED TO BACKEND HERE

		//SEND USER TO HOMEPAGE ONCE LOGGED IN
		//maybe enable some token? hit up ryan 
		//window.location = '/'


	}


	render() {
		return (
			<div>
				<h2>Welcome To Dove</h2>

				{/* The stuff here is commented out because only the login page is finished (kinda) so we may need this code later  */}

				<form action='/register' method="POST">
						<input name="form" type="submit" value="Sign Up"/>
				</form>
				{/* <form action='/search' method='POST'>
					<label> Search: </label><br /> 
					<input type = "text" id = "searchBar" name = "search" /><br />
					<label for="dataSearch"> What data to search </label>
					<select name="dataSearch" id="dataSearch">
						<option value="username"> Usernames </option>
						<option value="interests"> Interests </option>
						<option value="Personality"> Personality </option>
						<option value="age"> Age </option>
					</select><br />
					<input type="submit" value = "Submit" />
				</form> */}
				<form action='/login' method='POST'>
				<input name="form" type="submit" value="Sign In"/>
				</form>
		
			</div>
		);
	}
}

export default Login