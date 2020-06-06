import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"
import ThreeSelect from "./ThreeSelect"

function ThreeQuestion() {
  let [message, updateMessage] = useState("question")

  return (
    <div>
      <input type="text" onChange={event => updateMessage(event.target.value)} />
      <h2>{message}</h2>

      <Link to="/threeselect">reveal threeSelect</Link>

      <Route path="/threeselect">
        <ThreeSelect message={message} />
      </Route>
    </div>
  )
}

export default withRouter(ThreeQuestion)