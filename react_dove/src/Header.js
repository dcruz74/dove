import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom"

function Header () {
    return(
        // BEM
        <div className="header">
            <Link to="/myprofile">
                <IconButton>
                    <PersonIcon className="header__icon" font-size="large"/>
                </IconButton>
            </Link>
            <Link to="/home">
                <img 
                    className="header__logo" 
                    src="https://cdn4.iconfinder.com/data/icons/animals-color-icons-1/323/animal_87-512.png"
                    alt="dove logo"
                />
            </Link>
            <Link to="/messenger">
                <IconButton>
                    <ChatBubbleIcon className="header__icon" font-size="large"/>
                </IconButton>
            </Link>
        </div>
    )
}
export default Header