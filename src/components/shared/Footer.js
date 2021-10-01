import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  footer,
  imageWrapper,
  credits
} from "./Footer.module.css"


const Footer = () => {
  return (
    <footer className={ footer }>
      <div className={ imageWrapper }>
        <StaticImage src="./thunder-island-logo-footer.png" alt="thunder island logo" />
      </div>
      <div className={ credits }>
        <div>
          <p>Made with Gatsby and Wordpress</p>
        </div>
        <div>
          <p>Logo Design by Claire Murray</p>
        </div>
        <div>
          <p>@Copyright Alex 2021</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer