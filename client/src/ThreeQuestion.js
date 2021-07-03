import React from 'react'
import "./App.css"
import { Link, withRouter } from "react-router-dom"


function ThreeQuestion({ question, updateQuestion, threeSpreadOption, updateThreeSpreadOption }) {



  return (
    <div>
      <h2>{question}</h2>

      <input type="text" onChange={event => updateQuestion(event.target.value)} />
      <Link to="/threeselect" threeSpreadOption={threeSpreadOption} updateThreeSpreadOption={updateThreeSpreadOption}><h4>draw cards</h4></Link>


    </div>
  )
}

export default withRouter(ThreeQuestion)