import React, { createContext, useState } from 'react'

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {},
})

const MouseContextProvider = (props) => {
  const [cursorState, setCursorState] = useState('')

  const cursorChangeHandler = (cursorState) => {
    setCursorState(cursorState)
  }

  return (
    <MouseContext.Provider
      value={{
        cursorState: cursorState,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  )
}

export default MouseContextProvider
