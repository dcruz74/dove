import React from 'react';
import "./MyProfile.css";
import { Form, Container, Row, Col, Button, PhotoCamera} from 'react-bootstrap';
//import image from './userprofile.jpg'; 
import { Link } from "react-router-dom"
//import IconButton from "@material-ui/core/IconButton";
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';
import UploadImages from './UploadImages';


function MyProfile() {
    
    
    //render() {
        var profileImage1 = "../userprofile.jpg"; 
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

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
                    <h3>Ryan Doan</h3> <p className= 'emailStyle'>rldoan@gmail.com</p>
                    <h4>Backend Developer</h4>
                    
                </div>
                <br></br>
                <div>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>



        </div>
        


        <div className= 'button' style={wellStyles}>
            <Link to= "/home">
                <Button variant="contained" size="lg" block>Back to Home</Button>
            </Link> 

            <Link to= "/">
                <Button variant="contained" size="lg" block>Logout</Button>
            </Link> 

            <Link to= "/home/search">
                <Button variant="contained" size="lg" block>Search</Button>
            </Link> 

        </div>

            <UploadImages></UploadImages>



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