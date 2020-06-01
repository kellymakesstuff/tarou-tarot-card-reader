import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"


let fullUrl = "https://tarot.howlcode.com/api/v1/cards"
let threeCard = "https://tarot.howlcode.com/api/v1/spreads/three_cards"
let oneCard = "https://tarot.howlcode.com/api/v1/spreads/random_card"

export default function App() {
  const [cards, updateCards] = useState([])


  useEffect(() => {
    const apiCall = async () => {
      const cards = await axios(threeCard)
      updateCards(cards.data)
      console.log(cards.data)
    }
    apiCall()

  }, [])


  return (
    <div>
      <h1>Three Cards</h1>
      <br />
      <div className="cardBox">
        {cards.map(card => <CardDisplay key={card.id} name={card.name} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
          image={card.image} reversed={card.reversed} upright={card.upright} />)}
      </div>
    </div>
  )
}