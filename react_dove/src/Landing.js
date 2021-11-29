import React from 'react';
import "./Landing.css";
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';

function Landing () {
    return(
        // BEM
        <div>
            <div>
                <div>
                    <h1 className="welcome">Welcome to Dove</h1>
                </div>
            </div>

            <div className="buttons">
                <Link to="/register">
                    <IconButton>
                        <PersonAddAlt1Icon className="register__icon" font-size="large"/>
                    </IconButton>
                </Link>
                <Link to="/login">
                    <IconButton>
                        <PersonIcon className="login__icon" font-size="large"/>
                    </IconButton>
                </Link>
            </div>

        </div>
    )
}
export default Landing