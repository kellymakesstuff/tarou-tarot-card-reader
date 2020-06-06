import React from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route, withRouter } from "react-router-dom"
import AllCards from "./AllCards"
import OneOption from "./OneOption"
import ThreeOption from "./ThreeOption"

// let fullUrl = "https://tarot.howlcode.com/api/v1/cards"
// let threeCard = "https://tarot.howlcode.com/api/v1/spreads/three_cards"
// let oneCard = "https://tarot.howlcode.com/api/v1/spreads/random_card"
// // let newUrl;
// // let oneSelect;


function Home() {
  // const [cards, updateCards] = useState([])

  // useEffect(() => {
  //   const FullCall = async () => {
  //     const cards = await axios(threeCard)
  //     updateCards(cards.data)
  //     console.log(cards.data)
  //   }


  return <div>
    <h2>home</h2>
    <Link className="floatingTitle" to="/oneoption">one</Link>
    <Link className="floatingTitle" to="/threeoption">three</Link>
    <Link className="floatingTitle" to="/allcards">all cards</Link>

  </div>
}

export default withRouter(Home)