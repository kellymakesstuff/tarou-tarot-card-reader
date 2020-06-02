import React from 'react'


function CardDisplay(props) {

  console.log("props length", props.className)

  function imgFlip() {

    let randomNum = Math.random()
    if (props.className === "oneSelect") {
      return <div>
        <h2>{props.name}</h2>
        <img alt={props.name} src={props.image} />
        <p>{props.summary}</p>
      </div>
    } else if (props.className === "allCards") {
      return <div>
        <img alt={props.name} src={props.image} />
      </div>
    } else if (randomNum < .5) {
      return <div>
        <h2>{props.name}</h2>
        <img alt={props.name} src={props.image} />
        <p>{props.upright}</p>
      </div>
    } else {
      return <div>
        <h2>{props.name}</h2>
        <img className="flipImg" alt={props.name} src={props.image} />
        <p>Reversed: {props.reversed}</p>
      </div>
    }

  }
  return (
    <div>
      {imgFlip()}
    </div >
  )

}

export default CardDisplay