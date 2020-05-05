import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'



function Sidebar() {
    return (
        <div className='sidebar' >
            <Link title='home' to='/'>
                <i className="fas fa-home"></i>
            </Link>
            <Link title='view awesome map of mars' to='/MarsMap'>
                <i className="fas fa-circle"></i>
            </Link>
            <Link title='view awesome map of moon' to='/MoonMap'>
                <i class="fas fa-moon"></i>
            </Link>
            <Link title='awesome photos of Mars surface' to='/marsPics'>
                <i className="fas fa-camera"></i>
            </Link>
            <Link to='/daily'>
                <i className="far fa-image"></i>
            </Link>
            <Link title='photos of planets' to='/PlanetsPhotos'>
                <i class="fas fa-globe-asia"></i>
            </Link>
        </div>
    )
}

export default Sidebar