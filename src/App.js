import React from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route } from "react-router-dom"


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

  //   FullCall()
  //   // oneSelect = function oneSelect() {
  //   //   console.log('one')
  //   //   newUrl = "https://tarot.howlcode.com/api/v1/spreads/random_card";
  //   //   FullCall()
  //   // }

  //   // function threeSelect() {
  //   //   newUrl = "https://tarot.howlcode.com/api/v1/spreads/three_cards";
  //   //   FullCall()
  //   // }
  // }, [])


  return (
    <div>

      <header>
        <Link to="/" exact>Home</Link>
        <Link to="/oneselect" exact>one</Link>
        <Link to="/threeselect" exact>three</Link>
      </header>
      <main>

        <Route path="/oneselect">
          <OneSelect />
        </Route>

        <Route path="/threeselect">
          <ThreeSelect />
        </Route>

      </main>

    </div >
  )
}