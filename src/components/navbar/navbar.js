import React from "react";
import { Link } from "react-router-dom";
import primaryButton from "../../style/buttonPrimary";
import secondaryButton from "../../style/buttonSecondary";
import './navbar.css'

export default class Navbar extends React.Component{

    render(){

        return (
            <nav>
                <img src="/logo.png" alt="webport logo"/>
                <div>
                    <ul>
                        <li>
                            <Link to="/login" style={secondaryButton}>Login</Link>
                        </li>
                        <li>
                            <Link to="/register" style={primaryButton}>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }    

};