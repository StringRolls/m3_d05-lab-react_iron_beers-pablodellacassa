import React from 'react';
import { NavLink } from "react-router-dom";
import homeLogo from "../assets/home-logo.png"

export default function Header(){
    return(
        <NavLink to="/">
            <header className="header">
                <img src={homeLogo} alt="home-logo"/>
            </header>
        </NavLink>
    )
}