import React from 'react'
import CardData from './CardData'

const Card = () => {
  return (
    <>
        <div className='container'>
            <div className='card-body-cardlist'>
                <div className='wrapper'>
                    <CardData />
                </div>
            </div>
        </div>
    </>
  )
}

export default Card