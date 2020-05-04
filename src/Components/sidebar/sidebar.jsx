import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'



function Sidebar() {
    return (
        <div className='sidebar' >
            <Link to='/'>
                <i className="fas fa-home"></i>
            </Link>
            <Link to='/map'>
                <i className="fas fa-map"></i>
            </Link>
            <Link to='/marsPics'>
                <i className="fas fa-camera"></i>
            </Link>
            <Link to='/daily'>
                <i className="far fa-image"></i>
            </Link>
        </div>
    )
}

export default Sidebar