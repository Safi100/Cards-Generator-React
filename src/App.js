import React, { useEffect, useState } from 'react'
import "./app.css"
import Form from "./components/CardForm/Form"
import CardContainer from "./components/Card/CardContainer"
const App = () => {
  const [values,setValues]= useState({
    heading:"", 
    paragraph:""
  })
  const [card,AddCard] = useState([])
  return (
      <div className="wrapper">
        <h1 className='center-text'>Cards Generator</h1>
        <Form values={values}  setValues={setValues} card={card} AddCard={AddCard}/>
        <CardContainer cards={card}/>
        <p className='name'>Coded with <span className='heart'>&hearts;</span> by <a href="https://github.com/Safi100" target={'_blank'}>Safi Nafi</a></p>
      </div>
  )
}

export default App