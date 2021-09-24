import * as React from "react";
import { Link } from "gatsby"
import {
  btn
} from "./btn.module.css"

const LinkBtn = ( props ) => {

  const innerText = props.innerText
  
  return (
    <Link className={ btn } >{ innerText}</Link>
  )
}

export default LinkBtn