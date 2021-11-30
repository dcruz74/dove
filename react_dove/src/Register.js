//import { Upload } from '@mui/icons-material';
import React, { useState }from 'react';
//import DatePicker from 'react-date-picker'; 
import UploadImages from './UploadImages.js'; 


export class Register extends React.Component {
    constructor(props) {
		super(props); 
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            dob: 0,
            email: '',
            username: '',
            password: '',
            //TO DO: HOW TO STORE PICS? 
        }

        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
		this.changePassword = this.changePassword.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.handleChange_age = this.handleChange_age.bind(this)
        //this.calculate_age = this.calculate_age(this)

    }

    changeFirstName(event) {
        this.setState({
			firstName: event.target.value
		})
    }

    changeEmail(event) {
        this.setState({
			email: event.target.value
		})
    } 

    changeLastName(event) {
        this.setState({
			lastName: event.target.value
		})
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

    handleChange_age(event) {
        

        //var tempage = this.calculate_age(event.target.value)
        var today = new Date();
        var birthDate = new Date(event.target.value);  // create a date object directly from `dob` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var mon = today.getMonth() - birthDate.getMonth();
        if (mon < 0 || (mon === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        this.setState({
			dob: event.target.value,
            age: age_now
		})
    }



    render() {
        return(
            <div className = "Base-container">
                <h2>Register</h2>
                <br></br>

                <div className = 'form-div'>
                    <form method='POST' action='/register' //TO DO: DEFINE ONSUBMIT 
                    >


                    <label>First Name </label>
					<input type="text" name="firstName" placeholder="firstName"

                    />
					<br></br><br></br>

                    <label>Last Name </label>
					<input type="text" name="lastName" placeholder="lastName"
                    />
					<br></br><br></br>

                    
                    <label>Username </label>
					<input type="text" name="username" placeholder="username"
                    />
					<br></br><br></br>

					<label>Password </label>
					<input type="password" name="password" placeholder="password"
                    />
					<br></br><br></br>
                    
                    
                    <label> Email </label>
					<input type="email" name="email" placeholder="email"/>
					<br></br><br></br>



                    <label>Age </label>
                    <input type="date" name="dob" placeholder="dob">
                    </input> <br /><br />

                    <label for="interest_select"> Interests </label>
                    <select id = "interest_select" name = "interest_select" multiple>
                        <option value="sports"> Sports </option>
                        <option value="nature"> Nature </option>
                        <option value="music"> Music </option>
                        <option value="movies"> Movies </option>
                        <option value="books"> Books </option>
                        <option value="video_games"> Video Games </option>
                        <option value="cats"> Cats </option>
                        <option value="dogs"> Dogs </option>
                    </select> <br /> <br />


                    <h1>Upload Image</h1>
                    <form action="/register" enctype="multipart/form-data" method="POST">
                     <input type="file" name="myImage" accept="image/*"/>
        
                    </form>
                    {/* <UploadImages></UploadImages> */}
                    <input type="submit" value="Submit" />
                    
               
                     
                    </form>
                </div>
            </div>

        ); 
    }
}

export default Register;

//https://stackoverflow.com/questions/55200748/calculate-age-from-date-of-birth-user-input-value-in-react/55201016 AGE