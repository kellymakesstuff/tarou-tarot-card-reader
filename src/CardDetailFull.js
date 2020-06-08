import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"


function CardDetailFull(props) {
  console.log(props, "CardDetailFull")

  const SelectedCard = props.data.find(card => {
    return card.id == props.match.params.id
  })

  console.log(SelectedCard, "selected card")

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