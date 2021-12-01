import React from 'react';
import "./Matches.css";

async function getMatches(){
    // let matches = [ ]
    const response = await fetch('/matches')
    const data = await response.json();
    // console.log(data);
    return data;
    // matches = data.username;
    // console.log(matches);
}

function NewMatches () {
    console.log(getMatches())

    var matches = getMatches();
    console.log(getMatches());

    return(
        // BEM
        <div className="newmatches">
            <form method = "POST" action = "/matches">


            <input type="submit" value = "Show Matches" />
            </form>
        </div>
    )
}
export default NewMatches