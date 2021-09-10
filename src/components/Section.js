import * as React from "react"
import {
  section,
  column,
  row
}
from "../styles/Section.module.css"

const Section = ( { children, ...props } ) => {

  const flexDirect = !props.direction ? null : props.direction === "column" ? column : row

  return (
    <section className={ `${ section } ${flexDirect }` } >
      { children }
    </section>
  )

}

export default Section