import * as React from "react"

import {
  oneCol
} from "./SingleColumn.module.css"


const SingleColumn = ( { children }) => {
  return (
      <main className={ oneCol }>
        { children }
      </main>
  )
}

export default SingleColumn