import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <div className='system'>
                <Link to='/sun'>
                    <img style={{ zIndex: '13' }} className='sun' src="/images/sun.png" alt="" />
                </Link>
                <div className='mercury'>
                    <img className='planetImg' src="/images/mercury.png" alt="" />
                </div>
                <div className='venus'>
                    <img className='planetImg' src="/images/venus.png" alt="" />
                </div>
                <div className='earth'>
                    <img className='planetImg' src="/images/earth.png" alt="" />
                </div>
                <div className='mars'>
                    <img className='planetImg' src="/images/mars.png" alt="" />
                </div>
                <div className='jupiter'>
                    <img className='planetImg' src="/images/jupiter.png" alt="" />
                </div>
                <div className='saturn'>
                    <img className='planetImg' src="/images/saturn.png" alt="" />
                </div>
                <div className='uranus'>
                    <img className='planetImg' src="/images/uranus.png" alt="" />
                </div>
                <div className='neptune'>
                    <img className='planetImg' src="/images/neptune.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home

