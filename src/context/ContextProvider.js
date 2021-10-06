import React, { useReducer, createContext } from "react"

export const StateContext = createContext()
export const DispatchContext = createContext()

const initialState = {
  loggedIn: false,
  user: "Jon Doe"
}

function reducer ( state, action ) {
  switch ( action.type ) {
    case "login": {
      return {
        ...state,
        loggedIn: !state.loggedIn
      }
    }
       default:
      throw new Error("Bad Action in auth")
  }
}

const ContextProvider = ( { children } ) => {

const [ state, dispatch ] = useReducer( reducer, initialState )

  return (
    <StateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
          { children }
        </DispatchContext.Provider>
      </StateContext.Provider>
  )
}

export default ContextProvider
