# Tarou.
##Everyday insight through tarot cards.

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


###Tarou. Tarot Card Reader

Tarou is a desktop and mobile-compatible app that does one-card and three-card tarot card readings. Rather than trying to see the future, tarot is meant to give you a new perspective on your past, your present, and your potential, and a mental space to explore that in. Flip one card for a gratitude of the day, or do a three-card spread to explore what's working and what isn't in your current world, and what you can do to refocus. 
<br>

### Wireframes

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Body

![Dummy Link](url)

- Desktop Resource Index

![Dummy Link](url)

- Desktop Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

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

<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Creates individual card info pages |
| React Axios | Populates card data |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Control  | functional |   n   |   n   | _Control pabnel will house options like "flip card", "shuffle", "reset", and the type of spread._       |
|
|   CardDisplay    |   class    |   y   |   n   | _The component that will display each card image._ |
|
|   OneCard    |   class    |   y   |   n   | _Houses one instance of the CardDisplay component._      |
|
| ThreeCard | functional |   n   |   y   | _Houses three instances of the CardDisplay component._  |               |
|    SpreadDescription   | functional |   n   |   n   | _Displays the description of each card below the displayed card._ |
|
|    CardDetail   | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add header    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Add control panel |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create individual card |    H     |     3 hrs      |     1 hrs     |     TBD     |
| One-card configuration function |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Three-card configuration function |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Routed info page setup |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

#### Helper Functions

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Replace | _Replace "-" with " " in title strings from API (ex. "the-fool" --> "the fool"_ |

<br>

### Post-MVP

- CSS coloring and styling reacts dynamically to card suits, configurations 

<br>

***

## Project Delivery

### Code Showcase

> To be updated upon project completion. 

```
code snippet here
```

### Code Issues & Resolutions

> To be updated upon project completion. 
