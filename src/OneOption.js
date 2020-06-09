import React from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import { Link, Route, withRouter } from "react-router-dom"



function OneOption({ oneSpreadOption, updateOneSpreadOption }) {

  console.log("one option props", oneSpreadOption[0])

  return (
    <div>

      <Link className="floatingTitle fade-in" onClick={event => updateOneSpreadOption("daily intention")} to="/oneselect"><h2>{oneSpreadOption[0]}</h2></Link>
      <Link className="floatingTitle fade-in" onClick={event => updateOneSpreadOption("daily gratitude")} to="/oneselect"><h2>{oneSpreadOption[1]}</h2></Link>


      <Route path="/oneselect">
        <OneSelect />
      </Route>



    </div>
  )
}

export default withRouter(OneOption)