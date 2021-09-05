import * as React from "react";
import {
  btn
} from "../styles/Button.module.css"

const Button = ( props ) => {
  const btnText = props.btnText
  const onClickFunc = props.onClickFunc
  return (
    <button className={ btn } onClick={ onClickFunc }>{ btnText}</button>
  )
}

export default Button