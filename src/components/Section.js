
import React from "react"
import '../index.scss'

function Section (props) {
    return <div className="journal">
        <div className="journal--image">
        <img className="journal--img" src={`../images/${props.journal.imageUrl}`} alt="journal-image" />
        </div>
        <div className="journal--text">
        <div className="journal--location">
            <img className="journal--location-icon" src="../images/pin-location.png" alt="pin-location" />
            <p>{props.journal.location}</p>
            <a href="#">View on Google Maps</a>
        </div>
        <h1 className="journal--title">{props.journal.title}</h1>
        <div className="travel--dates">
            <p className="bold">{props.journal.startDate}-</p>
            <p className="bold">{props.journal.endDate}</p>
        </div>
        <p className="journal--description">{props.journal.description}</p>
        </div>
        </div>
}

export default Section