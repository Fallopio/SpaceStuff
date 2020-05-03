import React from 'react'
import { connect } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './marsCarousel.css'

function MarsCarousel(props) {
    return (



        <Carousel className='carousel' showArrows={true} showThumbs={false}>
            {
            props.marsPics.length > 1 ?
            props.marsPics.map(i =>
                <div key={i.id}>
                    <img src={i.img_src} alt="" />
                </div>
            ): <div />}
        </Carousel>


    )
}

const mapStateToProps = state => {
    return {
        marsPics: state.mars
    }
}

export default connect(mapStateToProps, null)(MarsCarousel)