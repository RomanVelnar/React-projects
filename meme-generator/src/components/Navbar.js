import React from "react"
import meme from "../images/troll-face.png"

export default function Navbar() {
    return(
        <nav className="navbar--container">
            <img src={meme} className="navbar--image"></img>
            <h1 className="navbar--title">Meme Generator</h1> 
            <h3 className="navbar--subtitle">React Course - Project 3</h3>
        </nav>
    )
}