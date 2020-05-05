import React from 'react'
import './planetsCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Venus from '../../assets/planet-photos/venus.jpg'
import Moon from '../../assets/planet-photos/moon.jpg'
import Earth from '../../assets/planet-photos/earth.jpg'
import Mars from '../../assets/planet-photos/mars.jpg'
import Jup from '../../assets/planet-photos/jupiter.jpg'
import Sat from '../../assets/planet-photos/saturn.jpg'
import Uranus from '../../assets/planet-photos/uranus.jpg'
import Nep from '../../assets/planet-photos/neptune.jpg'




function PlanetsCarousel() {
    return (
        <Carousel className='carousel' showArrows={true} showThumbs={false}>
           <div>
               <img className='planetPhoto' src={Venus} alt=""/>
               <p className='legend'>Photo of Venus</p>
           </div>
           <div>
               <img className='planetPhoto' src={Moon} alt=""/>
               <p className='legend'>Photo of moon</p>
           </div>
           <div>
               <img className='planetPhoto' src={Earth} alt=""/>
               <p className='legend'>Photo of Earth</p>
           </div>
           <div>
               <img className='planetPhoto' src={Mars} alt=""/>
               <p className='legend'>Photo of Mars</p>
           </div>
           <div>
               <img className='planetPhoto' src={Jup} alt=""/>
               <p className='legend'>Photo of Jupiter</p>
           </div>
           <div>
               <img className='planetPhoto' src={Sat} alt=""/>
               <p className='legend'>Photo of Saturn</p>
           </div>
           <div>
               <img className='planetPhoto' src={Uranus} alt=""/>
               <p className='legend'>Photo of Uranus</p>
           </div>
           <div>
               <img className='planetPhoto' src={Nep} alt=""/>
               <p className='legend'>Photo of Neptune</p>
           </div>
        </Carousel>
    )
}

export default PlanetsCarousel