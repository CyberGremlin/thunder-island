import React from "react"

import {
  pagination 
} from "./Pagination.module.css"

const Pagination = () => {

  return (
    <nav className={ pagination }>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  )
}

export default Pagination