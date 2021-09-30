import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  header
} from "./Header.module.css"


const Header = () => {
  
  return (
    <header className={ header }>
      <StaticImage src="./ThunderIslandLogo.png" alt="thunder island logo" />
    </header>
  )
}
export default Header