import React, { Component } from 'react'


function CardDisplay(props) {

  console.log(props)

  function imgFlip() {
    let randomNum = Math.random()
    if (randomNum < .5) {
      return <div><img src={props.image} />
        <p>{props.upright}</p>
      </div>
    } else {
      return <div><img className="flipImg" src={props.image} />
        <p>Reversed: {props.reversed}</p>
      </div>
    }

  }
  return (
    <div>
      <h2>{props.name}</h2>
      {imgFlip()}
    </div >
  )

}

export default CardDisplay