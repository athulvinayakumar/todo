import React, { createContext, useState } from 'react'
export const additemContext = createContext()
function ContextShare({children}) {
    const [addItemResponse, setAddItemResponse] = useState({})
  return (
   <>
   <additemContext.Provider value={{addItemResponse, setAddItemResponse}}>
    {children}
   </additemContext.Provider>
   </>
  )
}

export default ContextShare