import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return(     
  <div className='cards'>
    <h1>
        Check out these Epic Destinations
    </h1>
    <div className="cards__container">
       <div className="cards__wrapper">
           <ul className="cards__items">
               <CardItem src="images/20190608_143302_capture.jpg" 
               text='Toilet Boi' label='Splash' path='/products'/>
               <CardItem src="images/Resized_20180430_132436.jpg" 
               text="Meeka is the cutest cat that ever did live" label='GG' path='/services'/>
           </ul>
       </div> 
    </div>
  </div>
  )
}

export default Cards;
