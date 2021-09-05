import * as React from "react"
import {
  header
} from "../styles/Header.module.css"
import logoImg from "../static/ThunderIslandLogo.png"

const Header = () => {
  
  return (
    <header className={ header }>
      <img src={ logoImg } alt="thunder island logo" />
    </header>
  )
}
export default Header