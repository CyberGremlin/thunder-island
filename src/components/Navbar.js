import * as React from "react"
import { Link } from "gatsby"
import {
  navbar,
  isActive
} from "../styles/Navbar.module.css"

import { pages } from "../data/pages"

const Navbar = () => {

  const generateNavLinks = pages.map( page => {
    return (
      <Link key={ page.link } to={ page.link } activeClassName={isActive}>{ page.name }</Link>
    )
  })

  return (
    <nav className={ navbar }>
      <div>
        { generateNavLinks }
      </div>
    </nav>
  )

}

export default Navbar