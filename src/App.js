import React, { useState, useEffect } from 'react'
import axios from "axios"


let fullUrl = "https://tarot.howlcode.com/api/v1/cards"

export default function App() {
  const [cards, updateCards] = useState([])


  useEffect(() => {
    const apiCall = async () => {
      const cards = await axios(fullUrl)
      updateCards(cards.data)
      console.log(cards.data)
    }
    apiCall()
  }, [])


  return (
    <div>
      <h1>hello world</h1>
      {cards.map(card => <h2 key={card.id}>{card.name}</h2>)}
    </div>
  )
}