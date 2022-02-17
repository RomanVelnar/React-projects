import React from "react"
import data from "../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Main({item}) {

    return(
        <div className="main--container">
          <img src={item.imageUrl} alt="new" className="main--image" />
          <div className="main--info">
            <div className="main--country">
                <FontAwesomeIcon icon={faLocationDot} className="main--icon" />
                <h3 className="main--countryName">{item.location}</h3>
                <a className="main--link">View on Google Maps</a>
            </div>
                <h1 className="main--title">{item.title}</h1>
                <p className="main--date">{item.startDate} - {item.endDate}</p>   
                <p className="main--text">{item.description}</p>
          </div> 
        </div>
    )
}