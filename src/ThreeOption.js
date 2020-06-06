import React, { useState, useEffect } from 'react'
import "./App.css"
import OneSelect from "./OneSelect"
import ThreeSelect from "./ThreeSelect"
import { Link, Route, withRouter } from "react-router-dom"
import AllCards from "./AllCards"
import OneOption from "./OneOption"
import ThreeQuestion from "./ThreeQuestion"



function ThreeOption() {

  let [message, updateMessage] = useState("question")
  return (
    <div>
      <h2>Three: Option 1</h2>
      <h2>Three: Option 2</h2>

      <Link className="floatingTitle" to="/threequestion">three</Link>

      <Route path="/threequestion">
        <ThreeQuestion />
      </Route>
    </div>
  )
}


export default withRouter(ThreeOption)