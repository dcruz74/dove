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
                
                <div className = "header">Register</div>
                <div className = 'form-div'>
                    <form method='POST' action='/register' //TO DO: DEFINE ONSUBMIT 
                    >


                    <label>First Name</label>
					<input id = "firstName" type = "text"
					placeholder= 'First Name'
					onChange= {this.changeFirstName}
					value = {this.state.changeFirstName}
                    />
					<br></br><br></br>

                    <label>Last Name</label>
					<input id = "lastName" type = "text"
					placeholder= 'Last Name'
					onChange= {this.changeLastName}
					value = {this.state.changeLastName}
                    />
					<br></br><br></br>

                    
                    <label>Username</label>
					<input id = "userLogin" type = "text"
					placeholder= 'Username'
					onChange= {this.changeUserName}
					value = {this.state.changeUserName}
                    />
					<br></br><br></br>

					<label>Password</label>
					<input id = "passLogin" type="password" 
					placeholder= 'Password'
					onChange = {this.changePassword}
					value = {this.state.changePassword}/>
					<br></br><br></br>
                    
                    
                    <label>Email</label>
					<input id = "emailLogin" type="email" 
					placeholder= 'Email'
					onChange = {this.changeEmail}
					value = {this.state.changeEmail}/>
					<br></br><br></br>



                    <label>Age</label>
                    <input type="date" name="date_of_birth" 
                    //defaultValue= {this.state.dob} 
                    onChange={this.handleChange_age}
                    value = {this.state.handleChange_age}>
                    </input> <br /><br />


                    <UploadImages></UploadImages>
                    <input type="submit" value="Submit" />
                    
               
                     
                    </form>
                </div>
            </div>

        ); 
    }
}

export default Register;

//https://stackoverflow.com/questions/55200748/calculate-age-from-date-of-birth-user-input-value-in-react/55201016 AGE