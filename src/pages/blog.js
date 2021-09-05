import * as React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header" 
import SpacerSmall from "../components/Spacer"
import Footer from "../components/Footer"
import Posts from "../components/Posts"

const Blog = () => {
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header />
      <SpacerSmall />
        <main>
        <Posts />
        </main>
      <SpacerSmall />
      <Footer />
      </>
  )
}
       
export default Blog