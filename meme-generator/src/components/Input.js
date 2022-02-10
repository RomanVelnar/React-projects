import React from "react"

export default function Input(){
    return(
        <main>
            <form className="form">
                <input type="text" placeholder="Shut up" className="form--input"></input>
                <input type="text" placeholder="and take my money" className="form--input"></input>
                <button className="form--button">Get a new meme image</button>
            </form>
        </main>
    )
}