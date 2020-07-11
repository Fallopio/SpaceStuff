import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Sun from '../../assets/planet-icons/sun.png'
import Merc from '../../assets/planet-icons/mercury.png'
import Venus from '../../assets/planet-icons/venus.png'
import Earth from '../../assets/planet-icons/earth.png'
import Mars from '../../assets/planet-icons/mars.png'
import Jup from '../../assets/planet-icons/jupiter.png'
import Sat from '../../assets/planet-icons/saturn.png'
import Uranus from '../../assets/planet-icons/uranus.png'
import Nep from '../../assets/planet-icons/neptune.png'
import { useState } from 'react'

function Home() {
    const [speed, setSpeed] = useState(2);
    return (
        <div className='home'>
            <div className='system'>
                <Link to='/SpaceStuff/sun'>
                    <img style={{ zIndex: '13' }} className='sun' src={Sun} alt="" />
                </Link>
                <div className='mercury' style={{animation: `rotate ${10 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Merc} alt="" />
                </div>
                <div className='venus' style={{animation: `rotate ${12 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Venus} alt="" />
                </div>
                <div className='earth' style={{animation: `rotate ${14 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Earth} alt="" />
                </div>
                <div className='mars' style={{animation: `rotate ${16 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Mars} alt="" />
                </div>
                <div className='jupiter' style={{animation: `rotate ${18 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Jup} alt="" />
                </div>
                <div className='saturn' style={{animation: `rotate ${20 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Sat} alt="" />
                </div>
                <div className='uranus' style={{animation: `rotate ${22 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Uranus} alt="" />
                </div>
                <div className='neptune' style={{animation: `rotate ${24 / speed}s infinite linear`}}>
                    <img className='planetImg' src={Nep} alt="" />
                </div>
                {/* <input type="range" min='1' max='3' defaultValue='3' step='0.001' onChange={e => setSpeed(e.target.value)}/> */}
            </div>
        </div>
    )
}

export default Home

