import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"

let oneCard = "https://tarot.howlcode.com/api/v1/spreads/random_card"


function OneSelect() {
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


        <h1>One Card</h1>
        <button onClick={() => { FullCall() }}>button</button>
        <br />
        <div className="cardBox">
          {cards.map(card => <CardDisplay className="oneSelect" key={card.id} name={card.name.replace('-', ' ').replace('-', ' ')} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
            image={card.image} reversed={card.reversed} upright={card.upright} />)}
        </div>
      </main>

    </div >
  )
}

export default withRouter(OneSelect)