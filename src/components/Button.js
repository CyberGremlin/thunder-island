import * as React from "react";
import {
  btn
} from "../styles/Button.module.css"

const Button = ( props ) => {

  const innerText = props.innerText
  const onClickFunc = props.onClickFunc
  
  return (
    <button className={ btn } onClick={ onClickFunc }>{ innerText}</button>
  )
}

export default Button