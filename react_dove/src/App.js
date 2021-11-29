import React from 'react';
//import logo from './logo.svg';  Leslie commented this out 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Search from './Search';
import ProfileCards from './ProfileCards';
import './App.css';
import Register from './Register';
import Landing from './Landing';
import Suggested from './Suggested';
import MyProfile from './MyProfile';
import SearchResults from './SearchResults';
import Messenger from './Messenger';
import Matches from './Matches';
import UploadImages from './UploadImages';

function App() {
	return (
	  <div className="App">
		{/* Header */}
		<Router>
		<Header />
		  <Routes>
		  	<Route path="/" element={<Landing/>}>
			</Route>
		  	<Route path="/home" element={<ProfileCards/>}>
			</Route>
			<Route path = "/register" element= {<Register/>}>
			</Route> 
			<Route path="/login" element={<Login/>}>
			</Route>
			<Route path="/messenger" element={<Messenger/>}>
			</Route>
			<Route path="/myprofile" element={<MyProfile/>}>
			</Route>
			<Route path="/home/matches" element={<Matches/>}>
			</Route>
			<Route path="/home/suggested" element={<Suggested/>}>
			</Route>
			<Route path="/home/search" element={<Search/>}>
			</Route>
			<Route path="/results" element={<SearchResults/>}>
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
