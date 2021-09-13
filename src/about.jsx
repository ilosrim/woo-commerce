import React, { useContext } from 'react'
import { Data } from './context'

export const About = () => {

  const [mal, setMal] = useContext(Data);
  console.log(mal);

  const addName = (e) => {
    setMal(e.target.value)
  }
  const addSurname = (e) => {
    setMal(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='name' Data
        value='Mirsoli'
        onChange={(e) => addName(e)}
      />
      <input
        type="text"
        placeholder='surname'
        value='Mirsultonov'
        onChange={(e) => addSurname(e)}
      />
      {
        mal.map((val, index) => (
          <ul key='index'>
            <li>Name: {val.name}</li>
            <li>Surname: {val.surName}</li>
            <li>Age: {val.age}</li>
          </ul>
        ))
      }
    </div>
  )
}
