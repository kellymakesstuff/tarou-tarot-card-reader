import React from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route, withRouter } from "react-router-dom"
import AllCards from "./AllCards"
import ThreeOption from "./ThreeOption"


function OneOption() {


  return (
    <div>
      <h2>Option 1</h2>
      <h2>Option 2</h2>



      <Link className="floatingTitle" to="/oneselect">one</Link>

      <Route path="/oneselect">
        <OneSelect />
      </Route>



    </div>
  )
}

export default withRouter(OneOption)