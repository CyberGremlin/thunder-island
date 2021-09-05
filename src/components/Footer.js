import * as React from "react"
import {
  footer,
  imageWrapper
} from "../styles/Footer.module.css"
import logoImg from "../static/ThunderIslandLogo.png"

const Footer = () => {
  return (
    <footer className={ footer }>
      <div>
        <h6>Categories</h6>
      </div>
      <div>
        <p>@Copyright Alex 2021</p>
        <p>Made with Gatsby and Wordpress - eventually</p>
        <p>Logo Design by Claire Murray</p>
      </div>
      <div className={ imageWrapper }>
        <img src={ logoImg } alt="thunder island logo" />
      </div>
    </footer>
  )
}

export default Footer