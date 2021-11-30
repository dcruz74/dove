import React from 'react';
import Avatar from '@mui/material/Avatar'
import "./Chat.css"
import { Link } from "react-router-dom"



function Chat ({ name, message, timestamp, profilePic}) {
    return(
        <Link  to={`/messenger/${name}`}>

            <div className="chat">
                <Avatar className="chat__image" src={profilePic} />
                <div className="chat__details">

                        <h2>{name}</h2>

                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>
            </div>

        </Link>

        
    );
}


export default Chat