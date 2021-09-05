import * as React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header" 
import SpacerSmall from "../components/Spacer"
import Footer from "../components/Footer"
import OnePost from "../components/Onepost"

const Post = () => {
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header />
      <SpacerSmall />
        <main>
        <OnePost />
        </main>
      <SpacerSmall />
      <Footer />
      </>
  )
}
       
export default Post