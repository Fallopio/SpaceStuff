import React from 'react'
import { Map, TileLayer } from 'react-leaflet';



function MarsMap() {

    return (
        <Map center={[0, 0]} zoom={3} style={{height: '100%', width:'100%'}}>
            <TileLayer
                url='https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png'
                attribution="&copy; <a href=&quot;https://www.openplanetary.org/&quot;></a> contributors"
            />


        </Map>
    )
}

export default MarsMap