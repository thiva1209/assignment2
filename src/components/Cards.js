import React, { useRef } from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const cardsRef = useRef(null);

  return (
    <div className='cards' ref={cardsRef} id='services'>
        <h1>Check out our services!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                      src='image/picture-1.jpeg'
                      text='Corporate Event Planning'
                      label='Corporate'
                    />
                
                    <CardItem 
                      src='image/picture-2.jpg'
                      text='Wedding Planning'
                      label='Wedding'
                    />

                    <CardItem 
                      src='image/picture-3.jpg'
                      text='Social Event Planning'
                      label='Social'
                    />
                </ul>

                <ul className='cards__items'>
                    <CardItem 
                      src='image/picture-4.jpeg'
                      text='Destination Event Planning'
                      label='Destination'
                    />
                    <CardItem 
                      src='image/picture-5.jpg'
                      text='Event Design and Decor'
                      label='Design'
                    />
                    <CardItem 
                      src='image/picture-6.jpg'
                      text='Virtual Event Planning'
                      label='Virtual'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;


