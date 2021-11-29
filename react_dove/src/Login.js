import React from 'react';

class Login extends React.Component	{
	constructor() {
		super() 
		this.state = {
			username: '',
			password: '', 
			forgotPassword: false,
		} 

		// this.changeUserName = this.changeUserName.bind(this)
		// this.changePassword = this.changePassword.bind(this)
		// this.onSubmit = this.onSubmit.bind(this)

	}


	// changeUserName(event) {
	// 	this.setState({
	// 		username: event.target.value
	// 	})
	// }

	// changePassword(event) {
	// 	this.setState({
	// 		password: event.target.value
	// 	})
	// }

	// onSubmit(event) {
	// 	console.log("hi");
	// 	event.preventDefault() //prevents form from refreshing
	// 	const registered = {
	// 		username: this.state.username,
	// 		password: this.state.password, 
	// 	}



	// 	//SEND THIS REGISTERED TO BACKEND HERE

	// 	//SEND USER TO HOMEPAGE ONCE LOGGED IN
	// 	//maybe enable some token? hit up ryan 
	// 	//window.location = '/'


	// }

	render() {
		return (
			<div>
				<form method = "POST" action = "/login">
				<div className = "Login_container">
					<h2>Login</h2>
					
					<label>Username</label>
					<input type = "text" name = "username" placeholder = "username"
					/>
					<br></br><br></br>

					<label>Password</label>
					<input type = "password" name="password" 
					placeholder= 'password'
					/>
					<br></br><br></br>
					<input type= 'submit' value= 'Submit'/>

				</div>
				</form> 
		
			</div>
		);
	}
}

export default Login