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

function Home() {
    return (
        <div className='home'>
            <div className='system'>
                <Link to='/SpaceStuff/sun'>
                    <img style={{ zIndex: '13' }} className='sun' src={Sun} alt="" />
                </Link>
                <div className='mercury'>
                    <img className='planetImg' src={Merc} alt="" />
                </div>
                <div className='venus'>
                    <img className='planetImg' src={Venus} alt="" />
                </div>
                <div className='earth'>
                    <img className='planetImg' src={Earth} alt="" />
                </div>
                <div className='mars'>
                    <img className='planetImg' src={Mars} alt="" />
                </div>
                <div className='jupiter'>
                    <img className='planetImg' src={Jup} alt="" />
                </div>
                <div className='saturn'>
                    <img className='planetImg' src={Sat} alt="" />
                </div>
                <div className='uranus'>
                    <img className='planetImg' src={Uranus} alt="" />
                </div>
                <div className='neptune'>
                    <img className='planetImg' src={Nep} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home

