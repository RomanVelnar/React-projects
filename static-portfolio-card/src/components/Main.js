import React from "react"
import "../styles/Main.css"

function Main() {
    return(
        <main>
            <h1 className="main-title">Fun facts about React</h1>
            <ul className="main-items">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprice apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main