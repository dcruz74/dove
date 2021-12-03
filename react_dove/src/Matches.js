//import React from 'react';
import React, { useState } from 'react';
import "./Matches.css";

async function getMatches(){
    // let matches = [ ]
    const response = await fetch('/getMatches')
    const data = await response.json();
    // console.log(data);
    return data;
    // matches = data.username;
    // console.log(matches);
}

function NewMatches () {
    var matches = getMatches();

    matches.then(function(res){
        console.log(res);
    })

    console.log(matches);

    var list_matches = [ ];
    const [ numMatches, setNumMatches ] = useState("");
    matches.then(function(match){
        setNumMatches(match.length);
    })
    const [ firstNameS, setFirstName] = useState("");
    const [ lastNameS, setLastName] = useState("");
    const [ bioS, setBio ] = useState("");
    const [ ageS, setAge] = useState("");
    const [ urlS, setUrl] = useState("");

    const [ firstNameS2, setFirstName2] = useState("");
    const [ lastNameS2, setLastName2] = useState("");
    const [ bioS2, setBio2 ] = useState("");
    const [ ageS2, setAge2 ] = useState("");
    const [ urlS2, setUrl2 ] = useState("");

    const [ firstNameS3, setFirstName3] = useState("");
    const [ lastNameS3, setLastName3] = useState("");
    const [ bioS3, setBio3 ] = useState("");
    const [ ageS3, setAge3 ] = useState("");
    const [ urlS3, setUrl3 ] = useState("");

    var numLeft = numMatches;
    {/*const [ firstNameS4, setFirstName4] = useState("");
    const [ lastNameS4, setLastName4] = useState("");
    const [ bioS4, setBio4 ] = useState("");
    const [ ageS4, setAge4 ] = useState("");
const [ urlS4, setUrl4 ] = useState("");*/}

    matches.then(function(user){
        if(numLeft < 0){
            setFirstName('Add More Matches!');
            setLastName('');
            setBio('');
            setAge('');
            //setUrl("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
            setUrl('./userprofile.jpg')

            setFirstName2('Add More Matches!');
            setLastName2('');
            setBio2('');
            setAge2('');
            //setUrl2("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
            setUrl2('./userprofile.jpg');

            setFirstName3('Add More Matches!');
            setLastName3('');
            setBio3('');
            setAge3('');
            //setUrl3("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
            setUrl3('./userprofile.jpg');
            // return;
        }
        else{

        
            var idx = 0
            setFirstName(user[idx].firstName);
            setLastName(user[idx].lastName);
            setBio(user[idx].bio);
            setAge(user[idx].age);
            //setUrl("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
            setUrl(user[idx].profile_pic)
            numLeft = numLeft - 1;
            if(numLeft < 0)
            {
                setFirstName2('Add More Matches!');
                setLastName2('');
                setBio2('');
                setAge2('');
                //setUrl2("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                setUrl2('./userprofile.jpg');

                setFirstName3('Add More Matches!');
                setLastName3('');
                setBio3('');
                setAge3('');
                //setUrl3("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                setUrl3('./userprofile.jpg');
                // return;
            }
            else{
                var idx2 = 1
                setFirstName2(user[idx2].firstName);
                setLastName2(user[idx2].lastName);
                setBio2(user[idx2].bio);
                setAge2(user[idx2].age);
                //setUrl2("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                setUrl2(user[idx2].profile_pic);
                
                numLeft = numLeft - 1;
                if(numLeft < 0)
                {
                    setFirstName3('Add More Matches!');
                    setLastName3('');
                    setBio3('');
                    setAge3('');
                    //setUrl3("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl3('./userprofile.jpg');
                    // return;
                }
                else{
                    var idx3 = 2
                    setFirstName3(user[idx3].firstName);
                    setLastName3(user[idx3].lastName);
                    setBio3(user[idx3].bio);
                    setAge3(user[idx3].age);
                    //setUrl3("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
                    setUrl3(user[idx3].profile_pic);
                }
            }
            
        }
    })

    {/*var CurrUser1 = {
        name: firstNameS,
        age: ageS,
        bio: bioS,
        url: urlS
    }

    var CurrUser2 = {
        name: firstNameS2,
        age: ageS2,
        bio: bioS2,
        url: urlS2
    }

    var CurrUser3 = {
        name: firstNameS3,
        age: ageS3,
        bio: bioS3,
        url: urlS3
    }

    var CurrUser4 = {
        name: firstNameS4,
        age: ageS4,
        bio: bioS4,
        url: urlS4
    }

    users.push(CurrUser1)
    users.push(CurrUser2)
    users.push(CurrUser3)
users.push(CurrUser4)*/}

    return(
        // BEM
        /*<div className="newmatches">
            <form method = "POST" action = "/matches">


            <input type="submit" value = "Show Matches" />
            </form>
        </div>*/
        <div className="newmatches">
            <h1>Top 3 Matches</h1>
            <div class = "image-container">
                <img src={urlS} alt='profile pic'/>
            </div>
            <h3>{firstNameS}</h3>
            <h5>{ageS}</h5>
            <p>{bioS}</p>

            <br></br>
            <div class = "image-container">
                <img src={urlS2} alt='profile pic'/>
            </div>
            <h3>{firstNameS2}</h3>
            <h5>{ageS2}</h5>
            <p>{bioS2}</p>

            <br></br>
            <div class = "image-container">
                <img src={urlS3} alt='profile pic'/>
            </div>
            <h3>{firstNameS3}</h3>
            <h5>{ageS3}</h5>
            <p>{bioS3}</p>

            {/*<div className= "card-container" >
            <div class= 'upper-container'> 
                <div class= "image-container">
                    {/*<img src={profilepic} alt="profile pic"/>*/}
                    {/*<img src='./userprofile.jpg' alt='profile pic'/>
                </div>
            </div>
            <div class = 'lower-container'>
                <div>
                    {/*<h3 class = 'firstname'>{firstname}</h3>
                    <h3 class = 'lastname'>{lastname}</h3> 
                    <h3 class = 'agetodisplay'>{Age}</h3>
                    <p className= 'emailStyle'>{Email}</p>*/}
                    {/*<h3 class = 'firstname'></h3>
                    <h3 class = 'lastname'></h3> 
                    <h3 class = 'agetodisplay'></h3>
                    <p className= 'emailStyle'></p>
                    
                </div>
                <br></br>
                <div>
                    <p>  </p>
                </div>
            </div>



        </div>*/}
        </div>
        
    )
}
export default NewMatches