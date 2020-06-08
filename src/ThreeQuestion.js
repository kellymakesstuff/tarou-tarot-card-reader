import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"
import ThreeSelect from "./ThreeSelect"
import ThreeOption from "./ThreeOption"

function ThreeQuestion({ question, updateQuestion, threeSpreadOption, updateThreeSpreadOption }) {

  console.log("three queston props", threeSpreadOption)

  return (
    <div>
      <h2>{question}</h2>

      <input type="text" onChange={event => updateQuestion(event.target.value)} />
      <Link to="/threeselect" threeSpreadOption={threeSpreadOption} updateThreeSpreadOption={updateThreeSpreadOption}><h4>draw cards</h4></Link>


    </div>
  )
}

export default withRouter(ThreeQuestion)