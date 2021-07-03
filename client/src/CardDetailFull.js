import React from 'react'
import "./App.css"
import { withRouter } from "react-router-dom"


function CardDetailFull(props) {
  console.log(props, "CardDetailFull")

  const SelectedCard = props.data.find(card => {
    return card.id == props.match.params.id
  })


  return <>
    {
      SelectedCard && < div className="cardDetailBox" >
        <h2>{SelectedCard.name.replace('-', ' ').replace('-', ' ')}</h2>
        <p>Summary: {SelectedCard.summary}</p>
        <p>Upright meaning: {SelectedCard.upright}</p>
        <p>Reversed meaning: {SelectedCard.reversed}</p>
      </div>
    }
  </>
}

export default withRouter(CardDetailFull)