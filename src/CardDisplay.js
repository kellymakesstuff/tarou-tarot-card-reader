import React, { Component } from 'react'


function CardDisplay(props) {

  console.log(props)

  function imgFlip() {
    let randomNum = Math.random()
    if (randomNum < .5) {
      return <img src={props.image} />
    } else {
      return <img className="flipImg" src={props.image} />
    }

  }
  return (
    <div>
      <h2>ff {props.name}</h2>
      {imgFlip()}
    </div >
  )

}

export default CardDisplay