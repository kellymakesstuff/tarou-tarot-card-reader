import React from 'react'
import "./App.css"
import { Link, withRouter } from "react-router-dom"


function Home() {


  return <div>
    <h2>Choose your Path</h2>
    <Link className="floatingTitle fade-in" to="/oneoption"><h4>one-card spread</h4></Link>
    <Link className="floatingTitle fade-in" to="/threeoption"><h4>three-card spread</h4></Link>
    <Link className="floatingTitle fade-in" to="/allcards"><h4>all cards</h4></Link>

  </div>
}

export default withRouter(Home)