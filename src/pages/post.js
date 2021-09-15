import * as React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header" 
import Spacer from "../components/Spacer"
import Footer from "../components/Footer"
import Posting from "../components/Posting"

const Post = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Spacer size="large" />
        <main>
        <Posting />
        </main>
      <Spacer size="small" />
      <Footer />
      </>
  )
}
       
export default Post