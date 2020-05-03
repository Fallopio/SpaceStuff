import React from 'react'
import { connect } from 'react-redux'


function Daily(props) {
    return (
        <div className='daily'>
            {
                props.dailyInfo ?
                    <div className='header'>
                        <h2 className='header'>{props.dailyInfo.title}</h2>
                        <img src={props.dailyInfo.hdurl} alt="" />
                        <div>{props.dailyInfo.explanation}</div>
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