import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../style/PrimaryButton";
import SecondaryButton from "../../style/SecondaryButton"
import './navbar.css'

export default class Navbar extends React.Component{

    render(){

        return (
            <nav>
                <img src="/logo.png" alt="webport logo"/>
                <div>
                    <ul>
                        <li>
                            <Link to="/login" style={SecondaryButton}>Login</Link>
                        </li>
                        <li>
                            <Link to="/register" style={PrimaryButton}>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }    

};