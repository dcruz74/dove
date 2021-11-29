import React from 'react';
//import logo from './logo.svg';  Leslie commented this out 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import ProfileCards from './ProfileCards';
import './App.css';


function App() {
	return (
	  <div className="App">
		{/* Header */}
		<Router>
		<Header />
		  <Routes>
		  	<Route path="/home" element={<ProfileCards/>}>
			</Route>
			<Route path = '/register' element= {<Register/>}>
			</Route> 
			<Route path="/" element={<Login/>}>
			</Route>
			<Route path="/messenger">
			</Route>
			<Route path="/myprofile">
			</Route>
			<Route path="/matches">
			</Route>
			<Route path="/suggested">
			</Route>

		  </Routes>
  
		  {/* Profile Cards */}
		  {/* Buttons below profile cards */}
  
		  {/* messenger home */}
		  {/* personl chat */}
  
		</Router>
	  </div>
	);
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
