import React from "react"

import ContextProvider from "./src/context/ContextProvider"

const wrapRootElement = ( { element } ) => {
  return (
    <ContextProvider>
      { element }
    </ContextProvider>
  )
}

export default wrapRootElement