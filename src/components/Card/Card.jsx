import React from 'react'
import "./card.css"
const Card = ({heading, paragraph, img}) => {
  return (
      <div className="card">
        <div className="img_container"><img src={img} alt="random-img" /></div>
        <div className="card_info">
          <h2>{ heading }</h2>
          <p>{ paragraph }</p>
        </div>
    </div>
  )
}

export default Card