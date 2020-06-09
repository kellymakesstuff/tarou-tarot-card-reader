import React from 'react'
import "./App.css"
import { Link, withRouter } from "react-router-dom"


function ThreeOption({ threeSpreadOption, updateThreeSpreadOption }) {

  console.log("three options props", threeSpreadOption)

  return (
    <div>
      <Link to="/threequestion"><h2 className="fade-in" onClick={event => updateThreeSpreadOption(threeSpreadOption[1])}>{threeSpreadOption[0]}</h2></Link>
      <Link to="/threequestion"><h2 className="fade-in" onClick={event => updateThreeSpreadOption(threeSpreadOption[3])}>{threeSpreadOption[2]}</h2></Link>
      <Link to="/threequestion"><h2 className="fade-in" onClick={event => updateThreeSpreadOption(threeSpreadOption[5])}>{threeSpreadOption[4]}</h2></Link>


    </div>
  )
}


export default withRouter(ThreeOption)