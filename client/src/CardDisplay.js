import React from 'react'


function CardDisplay(props) {



  function imgFlip() {

    let randomNum = Math.random()
    if (props.className === "oneSelect") {
      return <div className="fade-in">
        <h4>{props.name}</h4>
        <img alt={props.name} src={props.image} />
        <p>{props.summary}</p>
      </div>
    } else if (props.className === "allCards") {
      return <div>
        <img className="smallImg" alt={props.name} src={props.image} />
      </div>
    } else if (randomNum < .5) {
      return <div className="fade-in">
        <img alt={props.name} src={props.image} />
        <p>{props.name}</p>
        <p>{props.upright}</p>
      </div>
    } else {
      return <div class="fade-in">
        <img className="flipImg" alt={props.name} src={props.image} />
        <p>{props.name}</p>
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