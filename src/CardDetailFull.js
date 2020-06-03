import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardDisplay from "./CardDisplay"
import "./App.css"
import { Link, Route, withRouter } from "react-router-dom"


function CardDetailFull(props) {
  console.log(props)
  return (
    <div>
      <h1>test {props.data.name}</h1>

    </div >
  )
}

export default withRouter(CardDetailFull)