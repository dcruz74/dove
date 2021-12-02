import React, { useState } from 'react';
import "./MyProfile.css";
//import image from './userprofile.jpg'; 
import { Link } from "react-router-dom"
import UploadImages from './UploadImages';
import {CustomButton} from './Button.styles'; 
import { SettingsAccessibility } from '@mui/icons-material';

async function getUser(){
    const response = await fetch('/myprofile');
    const data = await response.json();
    return data;
}

function MyProfile() {


    const[username, setUser] = useState(""); 
    const [firstname, setFirstName] = useState(""); 
    const [lastname, setLastName] = useState(""); 
    const [Email, setEmail] = useState(""); 
    const [Age, setAge] = useState(""); 
    const [Bio, setBio] = useState(""); 




    // Get the current user
    var user = getUser();
    
    // Look in the console to get what
    // each user will have
    //console.log(user);

    
    // Able to access the values of the user
    // such as name, email, etc.
    user.then(function(result){
        // Will print the first name of the current user
        // TODO:
        // - Display the name, email, etc. on the myprofile card
        console.log(result.firstName);

        setFirstName(result.firstName); 
        setLastName(result.lastName); 
        setEmail(result.email); 
        setAge(result.age); 
        setBio(result.bio); 

    })
    
    //render() {
        var profileImage1 = "../userprofile.jpg"; 

        return(
            
        <div className= "parent">
        <div className= "card-container" >
            <div class= 'upper-container'> 
                <div class= "image-container">
                    <img src={profileImage1} alt="profile pic"/> 
                </div>
            </div>
            <div class = 'lower-container'>
                <div>
                    <h3 class = 'firstname'>{firstname}</h3>
                    <h3 class = 'lastname'>{lastname}</h3> 
                    <h3 class = 'agetodisplay'>{Age}</h3>
                    <p className= 'emailStyle'>{Email}</p>
                    
                </div>
                <br></br>
                <div>
                    <p> {Bio} </p>
                </div>
            </div>



        </div>
        

            
        <div className= 'button' >
            <Link to= "/home">
                <CustomButton >Back to Home</CustomButton>
            </Link> 

            <form action="/logout" method="POST">
                {/*<button name="foo" value="logout">Log out</button> */}
                <CustomButton name= "foo" value= "logout">Logout</CustomButton>
            </form>

            <Link to= "/home/search">
                <CustomButton>Search</CustomButton>
            </Link> 

        </div>
        
            {/*<UploadImages></UploadImages> */}



    </div>

            // BEM
            /**
            <div className="myprofile">
            <Container>
        <Row>
       <Col className = "imagewrapper">
       <img src={profileImage1} className= 'userImage' alt="profile pic" />
       </Col>
        
            <div></div>
            <br></br><br></br>
            <h1>User Profile</h1>
            <Form className="form">     
            <p>{this.state.bio}</p>
            

  </Form>
  

       </Row>
        </Container>

            
    
            </div>
             */
        );
   // }
     
}
export default MyProfile