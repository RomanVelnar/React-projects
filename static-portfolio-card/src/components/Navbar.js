import React from "react"
import logo from "../images/react-icon-small.png" 
import "../styles/Navbar.css"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo} alt="" className="navbar-img"/>
            <h2 className="navbar-title">ReactFacts</h2>
            <h3 className="navbar-subtitle">React Course - Project 1</h3>
        </nav>
    )
}
