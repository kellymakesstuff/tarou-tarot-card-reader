import React, { useState, useEffect } from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route } from "react-router-dom"
import AllCards from "./AllCards"
import OneOption from "./OneOption"
import ThreeOption from "./ThreeOption"
import Home from "./Home"
import ThreeQuestion from "./ThreeQuestion"

// let fullUrl = "https://tarot.howlcode.com/api/v1/cards"
// let threeCard = "https://tarot.howlcode.com/api/v1/spreads/three_cards"
// let oneCard = "https://tarot.howlcode.com/api/v1/spreads/random_card"
// // let newUrl;
// // let oneSelect;


export default function App() {
  let [question, updateQuestion] = useState("enter question here")
  let [oneSpreadOption, updateOneSpreadOption] = useState(["daily intention", "daily gratitude"])

  // const [cards, updateCards] = useState([])

  // useEffect(() => {
  //   const FullCall = async () => {
  //     const cards = await axios(threeCard)
  //     updateCards(cards.data)
  //     console.log(cards.data)
  //   }


  return (
    <div>
      <header>
        <h6>Tarou.</h6>
        <Link className="header" to="/" exact>home</Link>
        <Link className="header" onClick={event => updateOneSpreadOption(["daily intention", "daily gratitude"])} to="/oneoption">one</Link>
        <Link className="header" to="/threeoption">three</Link>
        <Link className="header" to="/allcards">all cards</Link>
      </header>


      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/oneoption">
        <OneOption oneSpreadOption={oneSpreadOption} updateOneSpreadOption={updateOneSpreadOption} />
      </Route>

      <Route path="/threeoption">
        <ThreeOption question={question} updateQuestion={updateQuestion} />
      </Route>

      <Route path="/oneselect">
        <OneSelect oneSpreadOption={oneSpreadOption} updateOneSpreadOption={updateOneSpreadOption} />
      </Route>

      <Route path="/threequestion">
        <ThreeQuestion question={question} updateQuestion={updateQuestion} />
      </Route>

      <Route path="/threeselect">
        <ThreeSelect question={question} updateQuestion={updateQuestion} />
      </Route>

      <Route path="/allcards">
        <AllCards />
      </Route>




    </div >
  )
}