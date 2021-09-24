import * as React from "react"
import {
  footer
} from "./Footer.module.css"


const Footer = () => {
  return (
    <footer className={ footer }>
      <div>
        <p>Made with Gatsby and Wordpress</p>
      </div>
      <div>
        <p>Logo Design by Claire Murray</p>
      </div>
      <div>
        <p>@Copyright Alex 2021</p>
      </div>
    </footer>
  )
}

export default Footer