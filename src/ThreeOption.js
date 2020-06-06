import React from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route, withRouter } from "react-router-dom"
import AllCards from "./AllCards"
import OneOption from "./OneOption"




function ThreeOption() {


  return (
    <div>
      <h2>Three: Option 1</h2>
      <h2>Three: Option 2</h2>

      <Link className="floatingTitle" to="/threeselect">three</Link>

      <Route path="/threeselect">
        <ThreeSelect />
      </Route>
    </div>
  )
}


export default withRouter(ThreeOption)