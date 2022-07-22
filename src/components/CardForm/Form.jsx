import React from 'react'
import "./form.css"
const Form = ( {values, setValues, card, AddCard} ) => {
  const  HandleHeadingInputChange = (e)=>{
    const text = e.target.value.trimStart();
    setValues({...values , heading: text })
  }
  const HandleParaghraphInputChange = (e)=>{
    const text = e.target.value.trimStart();
    setValues({...values , paragraph: text })
  }
  const HandleSubmitForm = (e) => {
    e.preventDefault();
    AddCard([...card , { heading: values.heading, paragraph: values.paragraph.trim() , id: Math.floor(Math.random() * 1000) + 1 , image:`https://raw.githubusercontent.com/Sariay/Random-img/master/${Math.floor(Math.random() * 100) + 1}.jpg`}])
    setValues({heading:"",paragraph:""})
  }
  return (
    <form onSubmit={HandleSubmitForm} className='form'>
        <div>
            <p>Card Heading</p>
            <input onChange={HandleHeadingInputChange} type="text" value={values.heading} placeholder='Card Heading' required />
        </div>
        <div>
            <p>Card paragraph</p>
            <textarea onChange={HandleParaghraphInputChange} rows="5" value={values.paragraph} placeholder='write paragraph here...' required ></textarea>
        </div>
        <button className='btn'>Create Card</button>
    </form>
  )
}
export default Form
