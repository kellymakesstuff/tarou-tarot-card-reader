import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"

let threeCard = "https://tarot.howlcode.com/api/v1/spreads/three_cards"

function ThreeSelect() {
  const [cards, updateCards] = useState([])

  useEffect(() => {
    const FullCall = async () => {
      const cards = await axios(threeCard)
      updateCards(cards.data)
      console.log(cards.data)
    }

    FullCall()
    // oneSelect = function oneSelect() {
    //   console.log('one')
    //   newUrl = "https://tarot.howlcode.com/api/v1/spreads/random_card";
    //   FullCall()
    // }

    // function threeSelect() {
    //   newUrl = "https://tarot.howlcode.com/api/v1/spreads/three_cards";
    //   FullCall()
    // }
  }, [])



  return (
    <div>

      <main>


        <h1>Three Cards</h1>
        <br />
        <div className="cardBox">
          {cards.map(card => <CardDisplay key={card.id} name={card.name} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
            image={card.image} reversed={card.reversed} upright={card.upright} />)}
        </div>
      </main>

    </div >
  )
}

export default withRouter(ThreeSelect)