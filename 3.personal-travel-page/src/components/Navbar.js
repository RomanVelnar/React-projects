import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return(
        <nav className="navbar">
            <FontAwesomeIcon icon={faEarthEurope} className="navbar--icon" />
            <h2 className="navbar--title">My travel journal</h2>
        </nav>
    )

}