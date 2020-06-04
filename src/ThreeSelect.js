import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"

let threeCard = "https://tarot.howlcode.com/api/v1/spreads/three_cards"

function ThreeSelect() {
  let [cards, updateCards] = useState([])
  let [message, updateMessage] = useState("question")
  let [currentCounter, updateCounter] = useState(0)

  useEffect(() => {


    FullCall()

  }, [])


  const FullCall = async () => {
    let cards = await axios(threeCard)
    updateCards(cards.data)
    console.log(cards.data)
    cardReveal()
  }


  function cardReveal() {
    return <>

    </>
  }

  return (
    <div>

      <main>
        <h1>Three Cards</h1>
        <br />

        <button onClick={() => { FullCall() }}>button</button>
        <input type="text" onChange={event => updateMessage(event.target.value)} />
        <h2>{message}</h2>

        <div className="cardBox">
          {cards.map(card => <CardDisplay key={card.name} name={card.name.replace('-', ' ').replace('-', ' ')} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
            image={card.image} reversed={card.reversed} upright={card.upright} />)}

        </div>
      </main>

    </div >
  )
}

export default withRouter(ThreeSelect)




   // oneSelect = function oneSelect() {
    //   console.log('one')
    //   newUrl = "https://tarot.howlcode.com/api/v1/spreads/random_card";
    //   FullCall()
    // }

    // function threeSelect() {
    //   newUrl = "https://tarot.howlcode.com/api/v1/spreads/three_cards";
    //   FullCall()
    // }