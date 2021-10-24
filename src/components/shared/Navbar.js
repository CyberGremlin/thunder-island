import React, { useContext } from "react"
import { Link } from "gatsby"

import {
  navbar,
  navbarLogin,
  isActive
} from "./Navbar.module.css"

import { DispatchContext, StateContext } from "../../context/ContextProvider"

const Navbar = () => {

  const mainMenu = [
  {
      link: "/",
      name: "Home"
    },
    {
      link: "/blog",
      name: "Blog"
    },
    {
      link: "/food-and-health",
      name: "Food and Health"
    },
    {
      link: "/learn-english",
      name: "Learn English"
    },
    {
      link: "/portfolios",
      name: "Portfolios"
    },
     {
      link: "/about",
      name: "About"
    },
]
  
  const dispatch = useContext( DispatchContext )
  const state = useContext( StateContext )

  const generateNavLinks = mainMenu.map( page => {
    return (
      <Link key={ page.link } to={ page.link } activeClassName={isActive}>{ page.name }</Link>
    )
  })

  return (
      <nav className={ navbar }>
        <div>
        { generateNavLinks }
        <button className={ navbarLogin } onClick={ () => { dispatch( { type: "login" } ) } }>{ state.loggedIn ? `${state.user}` : "Login" }</button>
        </div>
      </nav>
  )

}

export default Navbar