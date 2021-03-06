import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { withRouter } from "react-router-dom"

let threeCard = "https://tarot.howlcode.com/api/v1/spreads/three_cards"

function ThreeSelect({ question, threeSpreadOption }) {
  let [cards, updateCards] = useState([])


  useEffect(() => {


    FullCall()

  }, [])


  const FullCall = async () => {
    let cards = await axios(threeCard)
    updateCards(cards.data)
    cardReveal()
  }


  function cardReveal() {
    return <>

    </>
  }

  return (
    <div>

      <main>
        <h2>{question}</h2>
        <div className="threeOptionTitles">
          <h4>{threeSpreadOption[0]}</h4>
          <h4>{threeSpreadOption[1]}</h4>
          <h4>{threeSpreadOption[2]}</h4>
        </div>

        <div className="cardBoxThree">
          {cards.map(card => <CardDisplay key={card.name} name={card.name.replace('-', ' ').replace('-', ' ')} summary={card.summary} full_meaning={card.full_meaning} id={card.id}
            image={card.image} reversed={card.reversed} upright={card.upright} />)}

        </div>
      </main>

    </div >
  )
}

export default withRouter(ThreeSelect)


