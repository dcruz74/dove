import React, {useState, useMemo, useRef}  from 'react'
import "./Suggested.css";

async function getSuggested(){
    const response = await fetch('/suggested');
    const data = await response.json();
    return data;
}


function Suggested () {
    var suggested_list = getSuggested();


    const [ numSuggestions, setNumSuggestions ] = useState("");
    suggested_list.then(function(suggestion){
        setNumSuggestions(suggestion.length);
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

    var numLeft = numSuggestions;

    suggested_list.then(function(user){
        if(numLeft === 0){
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
            return;
        }
        var idx = 1
        setFirstName(user[idx].firstName);
        setLastName(user[idx].lastName);
        setBio(user[idx].bio);
        setAge(user[idx].age);
        //setUrl("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
        setUrl(user[idx].profile_pic)
        numLeft = numLeft - 1;
        if(numLeft === 0)
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
            return;
        }
        var idx2 = 2
        setFirstName2(user[idx2].firstName);
        setLastName2(user[idx2].lastName);
        setBio2(user[idx2].bio);
        setAge2(user[idx2].age);
        //setUrl2("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
        setUrl2(user[idx2].profile_pic);
        
        numLeft = numLeft - 1;
        if(numLeft === 0)
        {
            setFirstName3('Add More Matches!');
            setLastName3('');
            setBio3('');
            setAge3('');
            //setUrl3("https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg");
            setUrl3('./userprofile.jpg');
            return;
        }
        var idx3 = 3
        setFirstName3(user[idx3].firstName);
        setLastName3(user[idx3].lastName);
        setBio3(user[idx3].bio);
        setAge3(user[idx3].age);
        setUrl3(user[idx3].profile_pic);
    })
    {/*const [ firstNameS, setFirstName] = useState("");
    const [ lastNameS, setLastName] = useState("");
    const [ bioS, setBio ] = useState("");

    const [ firstNameS2, setFirstName2] = useState("");
    const [ lastNameS2, setLastName2] = useState("");
    const [ bioS2, setBio2 ] = useState("");

    suggested_list.then(function(list){
        setFirstName(list[0].firstName);
        setLastName(list[0].lastName);
        setBio(list[0].bio);

        setFirstName2(list[1].firstName);
        setLastName2(list[1].lastName);
        setBio2(list[1].bio);
    })

    var suggested1 = {
        name: firstNameS + ' ' + lastNameS,
        bio: bioS
    }

    var suggested2 = {
        name: firstNameS2 + ' ' + lastNameS2,
        bio: bioS2
    }*/}

    return(
        // BEM
        <div className="suggested">
            <h1>Top 3 Suggested</h1>
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
export default Suggested