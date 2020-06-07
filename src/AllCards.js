import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"
import CardDetailFull from "./CardDetailFull"

let fullUrl = "https://tarot.howlcode.com/api/v1/cards"


function AllCards() {
  const [cards, updateCards] = useState([])
  let [chosen, updateChosen] = useState(0)

  useEffect(() => {
    FullCall()

  }, [])

  const FullCall = async () => {
    const cards = await axios(fullUrl)
    updateCards(cards.data)
    console.log("before return", cards.data[2])
  }


  return <div>
    <Route path="/allcards"><div>

      <Route path="/allcards/:id" exact><CardDetailFull data={cards} /></Route>
      <div className="cardBoxAll slider">
        {cards.map(cards => <div>
          <Link to={`/allcards/${cards.id}`}>
            <CardDisplay className="allCards" key={cards.name} name={cards.name.replace('-', ' ').replace('-', ' ')} summary={cards.summary} full_meaning={cards.full_meaning} id={cards.id}
              image={cards.image} reversed={cards.reversed} upright={cards.upright} />
          </Link>
        </div>)}
      </div></div></Route>





  </div>

}

export default withRouter(AllCards)