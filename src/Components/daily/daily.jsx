import React from 'react'
import { connect } from 'react-redux'
import './daily.css'


function Daily(props) {
    return (
        <div className='daily'>
            {
                props.dailyInfo ?
                    <div className='dailyDiv'>
                        <h2 className='header'>{props.dailyInfo.title}</h2>
                        <a href={props.dailyInfo.hdurl}>
                            <img className='dailyImg' src={props.dailyInfo.hdurl} alt="" />
                        </a>
                    </div> :
                    <div></div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dailyInfo: state.daily
    }
}

export default connect(mapStateToProps, null)(Daily)