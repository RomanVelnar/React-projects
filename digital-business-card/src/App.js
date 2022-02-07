import React from "react"
import "./App.css"
import Info from "./components/Info"
import About from "./components/About"
import Intro from "./components/Intro"
import Footer from "./components/Footer"

export default function App() {
  return(
    <div>
      <Info />
      <About />
      <Intro />
      <Footer />
    </div>
  )
}
