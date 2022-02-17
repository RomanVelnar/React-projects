import React from "react"
import batman from "../pictures/batman.jpg"
import "../styles/Info.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return(
        <div className="info-container">
            <img src={batman} alt="" className="info-thumbnail"></img>
            <div className="info-details">
                <h1 className="info-title">Roman Velnar</h1>
                <p className="info-subtitle">Frontend Developer</p>
                <p className="info-email">roman.velnar.com</p>
            <div className="info-buttons">    
                <button className="info-button-email"><FontAwesomeIcon icon={faEnvelope} className="info-button-icon" />Email</button>
                <button className="info-button-linkedin"><FontAwesomeIcon icon={faLinkedin} className="info-button-icon" />LinkedIn</button>
            </div>  
            </div>
        </div>
    )
}