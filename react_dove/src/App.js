import React from 'react';
//import logo from './logo.svg';  Leslie commented this out 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProfileCards from './ProfileCards';
import SwipeButtons from './SwipeButtons';
import './App.css';


class App extends React.Component	{
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
				<form onSubmit = {this.onSubmit}>
				<div className = "Login_container">
					<h2>Login</h2>

					<label>Username</label>
					<input id = "userLogin" type = "text"
					placeholder= 'Username'
					onChange= {this.changeUserName}
					value = {this.state.changeUserName}/>
					<br></br><br></br>

					<label>Password</label>
					<input id = "passLogin" type="password" 
					placeholder= 'Password'
					onChange = {this.changePassword}
					value = {this.state.changePassword}/>
					<br></br><br></br>
					<button>Forgot Password?</button>
					
					<br></br><br></br>
					<input type= 'submit' value= 'Submit'/>

				</div>
				</form> 
		
			</div>
		);
	}
}


/**			 
function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() =>{
		fetch('/api')
			.then((res) => res.json())
			.then((data) => setData(data.message));
	}, []);

	return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>{!data ? "Loading..." : data} </p>
		</header>
		</div>
	);
}




<div className = "Registration">
					<h1>Register</h1>
					<label>Username</label>
					<input id= "userRegister" type = "text" />
					<br></br>
					<br></br>
					<label>Email Address:</label>
					<input id= "emailRegister" type="text" />
					<br></br>
					<br></br>
					<label>Password</label>
					<input id= "passwrdRegister" type="password" />
					<br></br>
					<br></br>
					<button> Register</button>
					
				</div>
 */
export default App;
