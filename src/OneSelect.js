import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { withRouter } from "react-router-dom"

let oneCard = "https://tarot.howlcode.com/api/v1/spreads/random_card"


function OneSelect({ oneSpreadOption }) {
  const [cards, updateCards] = useState([])

  useEffect(() => {
    FullCall()

  }, [])

  const FullCall = async () => {
    const cards = await axios(oneCard)
    updateCards(cards.data)
    console.log(cards.data)
  }

  return (
    <div>

      <main>
        <h2>{oneSpreadOption}</h2>
        <div className="cardBox">
          {cards.map(card => <CardDisplay className="oneSelect" key={card.name} name={card.name.replace('-', ' ').replace('-', ' ')} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
            image={card.image} reversed={card.reversed} upright={card.upright} />)}
          <button onClick={() => { FullCall() }}>draw another card</button>
        </div>

      </main>

    </div >
  )
}

export default withRouter(OneSelect)