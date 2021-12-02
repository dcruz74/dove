import React from 'react';
import "./Suggested.css";

async function getSuggested(){
    const response = await fetch('/suggested');
    const data = await response.json();
    return data;
}


function Suggested () {
    var suggested_list = getSuggested();

    const [ firstNameS, setFirstName] = useState("");
    const [ lastNameS, setLastName] = useState("");
    const [ bioS, setBio ] = useState("");
    const [ ageS, setAge] = useState("");

    const [ firstNameS2, setFirstName2] = useState("");
    const [ lastNameS2, setLastName2] = useState("");
    const [ bioS2, setBio2 ] = useState("");
    const [ ageS2, setAge2 ] = useState("");

    suggested_list.then(function(list){
        setFirstName(list[0].firstName);
        setLastName(list[0].lastName);
        setBio(list[0].bio);

        setFirstName2(list[1].firstName);
        setLastName(list[1].lastName);
        setBio(list[1].bio);
    })

    var suggested1 = {
        name: firstNameS + ' ' + lastNameS,
        bio: bioS
    }

    var suggested2 = {
        name: firstNameS2 + ' ' + lastNameS2,
        bio: bioS2
    }

    return(
        // BEM
        <div className="suggested">

        </div>
    )
}
export default Suggested