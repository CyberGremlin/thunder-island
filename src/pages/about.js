import * as React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import SpacerSmall from "../components/Spacer"
import Footer from "../components/Footer"
import Profile from "../components/Profile"

import { AboutMe } from "../static/aboutMe"

const About = () => {
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header />
      <SpacerSmall />
      <h2>About</h2>
        <main>
        <Profile profiling={ AboutMe }/>
        </main>
      <SpacerSmall />
      <Footer />
    </>
  )
}
       
export default About
