import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"
import CardDetailFull from "./CardDetailFull"

let fullUrl = "https://tarot.howlcode.com/api/v1/cards"


function AllCards() {
  const [cards, updateCards] = useState([])

  useEffect(() => {
    FullCall()

  }, [])

  const FullCall = async () => {
    const cards = await axios(fullUrl)
    updateCards(cards.data)
    console.log("before return", cards.data)
  }

  return (
    <div>




      <h1>All Cards</h1>
      <br />
      <div className="cardBox">
        {cards.map(cards => <>
          <Link to={`/allcards/${cards.name}`}>
            <CardDisplay className="allCards" key={cards.name} name={cards.name.replace('-', ' ').replace('-', ' ')} summary={cards.summary} full_meaning={cards.full_meaning} id={cards.id}
              image={cards.image} reversed={cards.reversed} upright={cards.upright} />
          </Link>
        </>
        )}
      </div>
      <Route path="/allcards/:name" exact><CardDetailFull /></Route>



    </div >
  )
}

export default withRouter(AllCards)