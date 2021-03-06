import React, { useState } from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route } from "react-router-dom"
import AllCards from "./AllCards"
import OneOption from "./OneOption"
import ThreeOption from "./ThreeOption"
import Home from "./Home"
import ThreeQuestion from "./ThreeQuestion"

export default function App() {
  let [question, updateQuestion] = useState("what is your question?")
  let [oneSpreadOption, updateOneSpreadOption] = useState(["daily intention", "daily gratitude"])
  let [threeSpreadOption, updateThreeSpreadOption] = useState(["problem, cause, solution", ["problem", "cause", "solution"], "i think, i feel, i do", ["i think", "i feel", "i do"], "past, present, potential", ["past", "present", "potential"]])


  return (
    <div>
      <header>
        <h6>Tarou.</h6>
        <Link className="header" to="/" exact>home</Link>
        <Link className="header" onClick={event => updateOneSpreadOption(["daily intention", "daily gratitude"])} to="/oneoption">one</Link>
        <Link className="header" onClick={event => updateThreeSpreadOption(["problem, cause, solution", ["problem", "cause", "solution"], "I think, I feel, I do", ["I think", "I feel", "I do"], "past, present, potential", ["past", "present", "potential"]])} to="/threeoption">three</Link>
        <Link className="header" to="/allcards">all cards</Link>
      </header>


      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/oneoption">
        <OneOption oneSpreadOption={oneSpreadOption} updateOneSpreadOption={updateOneSpreadOption} />
      </Route>

      <Route path="/threeoption">
        <ThreeOption question={question} updateQuestion={updateQuestion} threeSpreadOption={threeSpreadOption} updateThreeSpreadOption={updateThreeSpreadOption} />
      </Route>

      <Route path="/oneselect">
        <OneSelect oneSpreadOption={oneSpreadOption} updateOneSpreadOption={updateOneSpreadOption} />
      </Route>

      <Route path="/threequestion">
        <ThreeQuestion question={question} updateQuestion={updateQuestion} threeSpreadOption={threeSpreadOption} updateThreeSpreadOption={updateThreeSpreadOption} />
      </Route>

      <Route path="/threeselect">
        <ThreeSelect question={question} updateQuestion={updateQuestion} threeSpreadOption={threeSpreadOption} updateThreeSpreadOption={updateThreeSpreadOption} />
      </Route>

      <Route path="/allcards">
        <AllCards />
      </Route>




    </div >
  )
}