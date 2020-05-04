import React, { useEffect } from 'react'
import './main.css'
import { getMarsPics } from './../actions/mars-pics';
import { connect } from 'react-redux';
import MarsMap from './mars-map/marsMap';
import Sidebar from './sidebar/sidebar';
import { getDaily } from './../actions/daily-pic';
import Home from './home/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MarsCarousel from './mars-carousel/marsCarousel';
import Daily from './daily/daily';
import Sun from './solar-info/sun/sun';
import MoonMap from './moon-map/moonMap';

function Main(props) {
    useEffect(() => {
        props.getMars()
        props.getDaily()
    }, [])

    return (
        <div className='main'>
            <BrowserRouter>
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/MarsMap'>
                        <MarsMap />
                    </Route>
                    <Route exact path='/MoonMap'>
                        <MoonMap />
                    </Route>
                    <Route exact path='/marsPics'>
                        <MarsCarousel />
                    </Route>
                    <Route exact path='/daily'>
                        <Daily />
                    </Route>
                    <Route exact path='/sun'>
                        <Sun />
                    </Route>                    
                </Switch>
            </BrowserRouter>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getMars: () => dispatch(getMarsPics()),
        getDaily: () => dispatch(getDaily())
    }
}

export default connect(null, mapDispatchToProps)(Main)