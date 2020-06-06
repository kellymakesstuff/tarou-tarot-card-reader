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
      SelectedCard && < div >
        <h1>test {SelectedCard.name}</h1>

      </div >
    }
  </>
}

export default withRouter(CardDetailFull)