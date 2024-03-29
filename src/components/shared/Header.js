import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  header
} from "./Header.module.css"

const Header = () => {
  
  return (
    <header className={ header }>
      <StaticImage src="./thunder-island-logo-header-small.png" alt="thunder island logo" aria-hidden="true"/>
      <h1>Thunder Island</h1>
    </header>
  )
}
export default Header