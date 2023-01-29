import React, { useState } from 'react';
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom'
import '../styles/BackpackSpecs.css'
import appalachian from '../data/appalachian.geojson'
import TrailMap from './TrailMap'
import { create } from '../services/locations'

// Hard coded but should be passed in as parameter
const trailOptions = ["Appalachian Trail"]

export default function BackpackerSpecs() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/angel-signup`;
        navigate(path);
    }
    const [selectedTrail, setSelectedTrail] = useState('Trail')

    function handleSubmit(e) {
        e.preventDefault();
        create({ userID: window.localStorage.getItem('loggedUser'), type: "Feature", geometry: { type: "Point", coordinates: [] }, properties: { title: "Angel Station", description: "Angel Station", type: "firstAid" } })
        routeChange()
    }

    return (
        <>
            <Dropdown options={trailOptions} value={selectedTrail} onChange={(e) => {
                setSelectedTrail(e.value);
            }} />
            <div map-wrapper>
                <TrailMap trailGeoJSON={appalachian} addMarkerEnabled={true}></TrailMap>
            </div>

        </>
        // </div>

    )
}