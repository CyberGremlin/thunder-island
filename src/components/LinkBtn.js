import * as React from "react";
import { Link } from "gatsby"
import {
  link
} from "../styles/LinkBtn.module.css"

const LinkBtn = ( props ) => {

  const innerText = props.innerText
  
  return (
    <Link className={ link } >{ innerText}</Link>
  )
}

export default LinkBtn