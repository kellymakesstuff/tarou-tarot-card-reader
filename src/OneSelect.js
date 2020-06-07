import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"
import OneOption from "./OneOption"
import ThreeOption from "./ThreeOption"

let oneCard = "https://tarot.howlcode.com/api/v1/spreads/random_card"


function OneSelect(props) {
  const [cards, updateCards] = useState([])
  console.log("one option props", props)

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
        <button onClick={() => { FullCall() }}>button</button>
        <div className="cardBox">
          {cards.map(card => <CardDisplay className="oneSelect" key={card.name} name={card.name.replace('-', ' ').replace('-', ' ')} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
            image={card.image} reversed={card.reversed} upright={card.upright} />)}
        </div>
      </main>

    </div >
  )
}

export default withRouter(OneSelect)