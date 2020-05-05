import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'



function Sidebar() {
    return (
        <div className='sidebar' >
            <Link title='home' to='/SpaceStuff'>
                <i className="fas fa-home"></i>
            </Link>
            <Link title='view awesome map of mars' to='/SpaceStuff/MarsMap'>
                <i className="fas fa-circle"></i>
            </Link>
            <Link title='view awesome map of moon' to='/SpaceStuff/MoonMap'>
                <i className="fas fa-moon"></i>
            </Link>
            <Link title='awesome photos of Mars surface' to='/SpaceStuff/marsPics'>
                <i className="fas fa-camera"></i>
            </Link>
            <Link to='/SpaceStuff/daily'>
                <i className="far fa-image"></i>
            </Link>
            <Link title='photos of planets' to='/SpaceStuff/PlanetsPhotos'>
                <i className="fas fa-globe-asia"></i>
            </Link>
        </div>
    )
}

export default Sidebar