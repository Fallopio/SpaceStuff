import React from 'react'
import './planetsCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function PlanetsCarousel() {
    return (
        <Carousel className='carousel' showArrows={true} showThumbs={false}>
           <div>
               <img className='planetPhoto' src="/images/venus.jpg" alt=""/>
               <p className='legend'>Photo of Venus</p>
           </div>
           <div>
               <img className='planetPhoto' src="/images/moon.jpg" alt=""/>
               <p className='legend'>Photo of moon</p>
           </div>
           <div>
               <img className='planetPhoto' src="/images/earth.jpg" alt=""/>
               <p className='legend'>Photo of Earth</p>
           </div>
           <div>
               <img className='planetPhoto' src="/images/mars.jpg" alt=""/>
               <p className='legend'>Photo of Mars</p>
           </div>
           <div>
               <img className='planetPhoto' src="/images/jupiter.jpg" alt=""/>
               <p className='legend'>Photo of Jupiter</p>
           </div>
           <div>
               <img className='planetPhoto' src="/images/saturn.jpg" alt=""/>
               <p className='legend'>Photo of Saturn</p>
           </div>
           <div>
               <img className='planetPhoto' src="/images/uranus.jpg" alt=""/>
               <p className='legend'>Photo of Uranus</p>
           </div>
           <div>
               <img className='planetPhoto' src="/images/neptune.jpg" alt=""/>
               <p className='legend'>Photo of Neptune</p>
           </div>
        </Carousel>
    )
}

export default PlanetsCarousel