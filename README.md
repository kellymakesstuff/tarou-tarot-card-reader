![Star Girl](https://media.giphy.com/media/8lOsZwQ9wLnhu/giphy.gif)
# Tarou.
*Everyday Insight through Tarot Cards.*

- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)


### Overview
**Tarou. Tarot Card Reader**

View on Netlify: https://tarou.netlify.app/

<br>
Tarou is a desktop and mobile-compatible app that does one-card and three-card tarot card readings. Rather than trying to see the future, tarot is meant to give you a new perspective on your past, your present, and your potential, and a mental space to explore that in. Flip one card for a gratitude of the day, or do a three-card spread to explore what's working and what isn't in your current world, and what you can do to refocus. Built for all us little wanderers trying to figure it out on this big rock.  

![Dog in Space](https://www.reactiongifs.com/wp-content/uploads/2013/11/I-have-no-idea-what-I-am-doing.gif)


<br>

### Wireframes

![Wireframes](https://i.imgur.com/x8c0VjY.png)

- Desktop, mobile, and tablet configuratons (three-card spread)

<br>

### MVP
- User can pick one card at random for daily gratitude or intention
- User can ask a question and pick three random cards for three-card spreads like "I think, I feel, I do", "Where I stand, what I aspire to, how to get there", and other formats 
- User can click cards for more info

<br>

#### Goals

- App can do one-card or three-card spreads
- App can take a user-input question to display for three-card spreads
- App can route to individual info pages for each card
- Card components can be shuffled, reversed, and randomized
- JEST testing

<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Creates individual card info pages |
| React Axios | Populates card data from API |

<br>

#### Data

> Data will be utilized from the Tarot API. A working API call can be found in the App.js file in this repo. 

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Tarot API |      yes      | ![Tarot API](https://github.com/howlCode/tarot_api) | https://tarot.howlcode.com/api/v1/spreads/three_cards |

```
[
    {
        "id": 32,
        "name": "ten-of-swords",
        "summary": "A difficult situation comes to an abrupt end when the Ten of Swords appears and it pretty much leave you feeling devastated. The truth is finally out and you now accept something you didn’t before. At least you are now freed from the restraints and difficulties of this situation so try to pick yourself up, dust yourself off and move on.",
        "full_meaning": "The message with this card is that, now the truth of the situation is faced, it has to end. The Subject will be able to set new challenges and embark on a new, happier life, free from the hurt and anxiety depicted in this card. Things will start to get better, one day at a time. The Subject should dedicate their time and energy to what is before them, new horizons, rather than on what has passed which will hold them back.",
        "upright": "failure, collapse, defeat",
        "reversed": "can't get worse, only upwards, inevitable end",
        "image": "https://tarot-api.s3.amazonaws.com/images/minor/swords/10.jpg",
        "created_at": "2020-05-22T20:11:08.811Z",
        "updated_at": "2020-05-22T20:11:08.811Z"
    },
    {
        "id": 64,
        "name": "king-of-wands",
        "summary": "An ambitious, dynamic leader, able to inspire and make things happen. He will help turn your ideas into reality; taking it to levels you’d never considered. He gets bored easily though and so won’t be around for the duration. To make best use of his input, learn something about his attributes so you can adopt them when he has moved on.",
        "full_meaning": "The King of Wands is full of ambition, he is not scared of taking risks and is in a position of power and authority. He has a solid character and can influence people, events and the environment around him. He is a true leader; he inspires and is happiest when he is on an adventure, fighting a battle or trying to conquer something. He thrives on challenges and is not content with humdrum life. He will get bored if bogged down in routine and doesn’t like performing to the same tune as anyone else.",
        "upright": "big picture, leader, overcoming challenges",
        "reversed": "impulsive, overbearing, unachievable expectations",
        "image": "https://tarot-api.s3.amazonaws.com/images/minor/wands/14.jpg",
        "created_at": "2020-05-22T20:11:08.972Z",
        "updated_at": "2020-05-22T20:11:08.972Z"
    },
    {
        "id": 74,
        "name": "ten-of-pentacles",
        "summary": "Whatever you have been working to create is established and will endure. You are content and happy with your lot. A time to partake in tradition and share emotional or financial inheritance. You enjoy a happy, solid family life.",
        "full_meaning": "The Subject should be feeling very secure, happy and content. The Ten of Pentacles is more than just a positive omen for their financial or material fortune, it points to circumstances or achievements that have manifested in physical ways and which have longevity. As such, it can represent buying a home, having established a business, or even a family unit.",
        "upright": "legacy, culmination, inheritance",
        "reversed": "fleeting success, lack of stability, lack of resources",
        "image": "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/10.jpg",
        "created_at": "2020-05-22T20:11:09.013Z",
        "updated_at": "2020-05-22T20:11:09.013Z"
    }
]
```

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ images
        |__ Optional alternative card deck

|__ components/
      |__ Header.js
      |__ Control.js
      |__ CardDisplay.js
      |__ OneCard.js
      |__ ThreeCard.js
      |__ SpreadDescription.js
      |__ CardDetail.js

```

<br>

#### Component Breakdown

|  Component   |    Type    | State | Props | Description |                                                     
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._ |            
|  Control  | functional |   n   |   n   | _Control pabnel will house options like "flip card", "shuffle", "reset", and the type of spread._  |      
|   CardDisplay    |   class    |   y   |   y   | _The component that will display each card image._ 
|   OneCard    |   class    |   y   |   y   | _Houses one instance of the CardDisplay component._      |
| ThreeCard | functional |   y   |   y   | _Houses three instances of the CardDisplay component._  |               |    SpreadDescription   | functional |   y   |   y   | _Displays the description of each card below the displayed card._ |
|    CardDetail   | functional |   y   |   y   | _The full detail page for each card (through router)_ |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add header    |    L     |     2 hrs      |     TBD    |    1 hr    |
| Add control panel |    H     |     4 hrs      |     TBD     |    changed     |
| Create individual card |    H     |     3 hrs      |     TBD    |     2 hrs     |
| One-card configuration function |    M     |     4 hrs      |   TBD   |     7hrs     |
| Three-card configuration function |    H     |     5 hrs      |     TBD    |     9 hrs     |
| Routed info page setup |    M     |     4 hrs      |    TBD     |     4 hrs     |
| CSS and Styling |    M     |     4 hrs      |    TBD     |     5 hrs     |
| TOTAL               |          |     26 hrs      |     TBD     |     28 hrs     |

<br>

#### Helper Functions

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Replace | _Replace "-" with " " in title strings from API (ex. "the-fool" --> "the fool"_ |

<br>

### Post-MVP

- CSS coloring and styling reacts dynamically to card suits, configurations 
- Card flip animation
- Additional information views in spread-mode
- Two-card spread option

<br>

***

## Project Delivery

### Code Showcase

I wanted to be able to keep the card display all in one component, which I was able to do by using an "if" in conjuction with class names depending on the page and whether or not it was a page where a card could be flipped. It made things a lot easier than having four different card display components. 

```
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
```

### Code Issues & Resolutions

> My biggest issues was maintaining state throughout the entire parent-child string since I had so many components that followed in a row, but once I figured out the best place for state in the parent component, it worked out a lot better.  

> Also, because the API was an array of objects, it took a lot of un-DRY code to be able to pass down each individual key of info as a prop, as opposed to being able to just pass "data". I'll probably refactor this in the future. 
