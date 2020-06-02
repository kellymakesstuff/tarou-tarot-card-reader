import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"

let fullUrl = "https://tarot.howlcode.com/api/v1/cards"


function AllCards() {
  const [cards, updateCards] = useState([])

  useEffect(() => {
    FullCall()

  }, [])

  const FullCall = async () => {
    const cards = await axios(fullUrl)
    updateCards(cards.data)
    console.log(cards.data)
  }

  return (
    <div>

      <main>


        <h1>All Cards</h1>
        <br />
        <div className="cardBox">
          {cards.map(card =>
            <Link to={card.id}>
              <Route path={card.id}>
                <CardDisplay className="allCards" key={card.id} name={card.name.replace('-', ' ').replace('-', ' ')} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
                  image={card.image} reversed={card.reversed} upright={card.upright} />

              </Route>
            </Link>
          )}
        </div>
      </main>

    </div >
  )
}

export default withRouter(AllCards)