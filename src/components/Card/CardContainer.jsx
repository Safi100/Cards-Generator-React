import React from 'react'
import "./card.css"
import Card from "./Card"
const CardContainer = ({cards}) => {  
  return (
    <div className="card_container">
      { (cards.length === 0) ? <h2 className='No_cards_yet'>No cards yet... 🙄</h2> : cards.map((card) => (
         <Card heading={card.heading} paragraph={card.paragraph} img={card.image}/>
         ))  
         }
    </div>
  )
}
export default CardContainer
