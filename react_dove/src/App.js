import React from 'react';
//import logo from './logo.svg';  Leslie commented this out 
import './App.css';


class App extends React.Component	{
	render() {
		return (
			<div className="App">
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
				<div className = "Login">
					<h2>Login</h2>

					<label>Username</label>
					<input id = "userLogin" type = "text"/>
					<br></br><br></br>

					<label>Password</label>
					<input id = "passLogin" type="password" />
					<br></br>
					<br></br>
					<button>Forgot Password?</button>


				</div>
				
			</div>
		);
	}
}


/**				Leslie commented this out 
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
 */
export default App;
