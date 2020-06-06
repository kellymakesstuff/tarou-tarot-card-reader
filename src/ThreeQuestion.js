import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"
import ThreeSelect from "./ThreeSelect"
import ThreeOption from "./ThreeOption"

function ThreeQuestion({ question, updateQuestion }) {

  console.log("three queston props", question)
  console.log("three queston updae q", updateQuestion)

  return (
    <div>
      <input type="text" onChange={event => updateQuestion(event.target.value)} />
      <h2>{question}</h2>

      <Link to="/threeselect">reveal threeSelect</Link>

      <Route path="/threeselect">
        <ThreeSelect question={question} />
      </Route>
    </div>
  )
}

export default withRouter(ThreeQuestion)