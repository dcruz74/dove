//import React from 'react';
import React, { useState } from 'react';
import "./Matches.css";

async function getMatches(){
    const response = await fetch('/matches')
    const data = await response.json();
    
    return data;
}

function NewMatches () {
    console.log(getMatches())

    var matches = getMatches();
    console.log("hello from NewMatches");
    console.log(getMatches());

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
  
    matches.then(function(user){
        if(numLeft < 1){
            setFirstName('Add More Matches!');
            setLastName('');
            setBio('');
            setAge('');
            setUrl('./userprofile.jpg')

            setFirstName2('Add More Matches!');
            setLastName2('');
            setBio2('');
            setAge2('');
            setUrl2('./userprofile.jpg');

            setFirstName3('Add More Matches!');
            setLastName3('');
            setBio3('');
            setAge3('');
            setUrl3('./userprofile.jpg');
        }
        else{
            var idx = 1
            setFirstName(user[idx].firstName);
            setLastName(user[idx].lastName);
            setBio(user[idx].bio);
            setAge(user[idx].age);
            setUrl(user[idx].profile_pic)
            numLeft = numLeft - 1;
            if(numLeft < 1)
            {
                setFirstName2('Add More Matches!');
                setLastName2('');
                setBio2('');
                setAge2('');
                setUrl2('./userprofile.jpg');

                setFirstName3('Add More Matches!');
                setLastName3('');
                setBio3('');
                setAge3('');
                setUrl3('./userprofile.jpg');
            }
            else{
                var idx2 = 2
                setFirstName2(user[idx2].firstName);
                setLastName2(user[idx2].lastName);
                setBio2(user[idx2].bio);
                setAge2(user[idx2].age);
                setUrl2(user[idx2].profile_pic);
                
                numLeft = numLeft - 1;
                if(numLeft < 1)
                {
                    setFirstName3('Add More Matches!');
                    setLastName3('');
                    setBio3('');
                    setAge3('');
                    setUrl3('./userprofile.jpg');
                    return;
                }
                else{
                var idx3 = 3
                setFirstName3(user[idx3].firstName);
                setLastName3(user[idx3].lastName);
                setBio3(user[idx3].bio);
                setAge3(user[idx3].age);
                setUrl3(user[idx3].profile_pic);
                }
            }
        }
    })

    

    return(
        // BEM
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

            
                   
        </div>
        
    )
}
export default NewMatches