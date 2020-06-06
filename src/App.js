import React from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route } from "react-router-dom"
import AllCards from "./AllCards"
import OneOption from "./OneOption"
import ThreeOption from "./ThreeOption"

// let fullUrl = "https://tarot.howlcode.com/api/v1/cards"
// let threeCard = "https://tarot.howlcode.com/api/v1/spreads/three_cards"
// let oneCard = "https://tarot.howlcode.com/api/v1/spreads/random_card"
// // let newUrl;
// // let oneSelect;


export default function App() {
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
        <Link to="/" exact>Home</Link>
        <Link to="/allcards">all cards</Link>
      </header>
      <main>
        <Link className="floatingTitle" to="/oneoption">one</Link>
        <Link className="floatingTitle" to="/threeoption">three</Link>
        <Link className="floatingTitle" to="/allcards">all cards</Link>

        <Route path="/oneoption">
          <OneOption />
        </Route>

        <Route path="/threeoption">
          <ThreeOption />
        </Route>



        <Route path="/oneselect">
          <OneSelect />
        </Route>

        <Route path="/threeselect">
          <ThreeSelect />
        </Route>

        <Route path="/allcards">
          <AllCards />
        </Route>

      </main>

    </div >
  )
}