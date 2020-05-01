import React, { useEffect } from 'react'
import './main.css'
import { getMarsPics } from './../actions/mars-pics';
import { connect } from 'react-redux';

function Main(props) {
    useEffect(() => {
        props.getMars()
    }, [])

    return (
        <div className='main'>
            <video loop muted autoPlay className="fullscreen-bg__video">
                <source src="../assets/back.webm" type="video/webm" />
                    
            </video>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getMars: () => dispatch(getMarsPics())
    }
}

export default connect(null, mapDispatchToProps)(Main)