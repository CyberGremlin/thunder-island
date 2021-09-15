import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  footer,
  imageWrapper
} from "../styles/Footer.module.css"


const Footer = () => {
  return (
    <footer className={ footer }>
       <div className={ imageWrapper }>
        <StaticImage src="../images/ThunderIslandLogo.png" alt="thunder island logo" />
      </div>
      <div>
        <h6>Categories</h6>
      </div>
      <div>
        <p>@Copyright Alex 2021</p>
        <p>Made with Gatsby and Wordpress - eventually</p>
        <p>Logo Design by Claire Murray</p>
      </div>
     
    </footer>
  )
}

export default Footer