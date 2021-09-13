import React, { createContext, useState } from 'react'

export const Data = createContext()

export const DataProvider = ({children})=>{
  const [mal, setMal] = useState([
    {id:1, name:'Mirsoli', surName:'Mirsultonov', age:23}
  ])

  return (
    <Data.Provider value={[mal, setMal]}>
      {children}
    </Data.Provider>
  )
}