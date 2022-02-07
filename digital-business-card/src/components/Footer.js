import React from "react"
import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <div className="footer-container">
            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
            <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </div>
    )
}