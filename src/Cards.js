import React from 'react'
import CardsLine1 from './CardsLine1'
import './Cards.css'
import CardsLine2 from './CardsLine2'
import CardsLine3 from './CardsLine3'
import CardsLine4 from './CardsLine4'

function Cards() {
  return (
    <div className='cards'>
        <CardsLine1 />
        <CardsLine2/>
        <CardsLine3 />
        <CardsLine4 />
    </div>
  )
}

export default Cards