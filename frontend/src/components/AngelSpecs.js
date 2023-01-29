import React, { useState } from 'react';
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom'
import '../styles/AngelSpecs.css'
import appalachian from '../data/appalachian.geojson'
import TrailMap from './TrailMap'
import { create } from '../services/locations'

// Hard coded but should be passed in as parameter
const trailOptions = ["Appalachian Trail"]
const typeOptions = ["Food/Water", "Transportation", "Shelter", "First Aid"]

export default function AngelSpecs() {
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/angel-signup`;
        navigate(path);
    }
    const [selectedTrail, setSelectedTrail] = useState('Trail')
    const [selectedType, setSelectedType] = useState('Type')

    const submit = () => {
        let newObj = { userID: window.localStorage.getItem('loggedUser'), type: "Feature", geometry: { type: "Point", coordinates: {longitude: longitude, latitude: latitude} }, properties: { title: "Angel Station", description: "Angel Station", type: "firstAid" } }
        console.log(newObj)
        create(newObj)
        routeChange()
    }

    return (
        <>
        <Dropdown options={trailOptions} value={selectedTrail} onChange={(e) => {
                    setSelectedTrail(e.value);
                }} />
                 <Dropdown options={typeOptions} value={selectedType} onChange={(e) => {
                    setSelectedType(e.value);
                }} />
                <div map-wrapper>
                    <TrailMap trailGeoJSON={appalachian} addMarkerEnabled={true}></TrailMap>
                </div>
                <div className="magic-specs-wrapper">
                    <h3>Double click on your station!</h3>
                    <h3>or Enter your coordinates:</h3>
                    <input onChange={(e) => setLongitude(e.target.value)} type="number" className="lat-input" placeholder='Longitude'>
                    </input>
                    <input onChange={(e) => setLatitude(e.target.value)} type="number" classname="lon-input" placeholder="Latitude"></input>
                </div>
                <button onClick={() => submit()} type="submit" className="submit-angel-specs">Submit</button>
            </>

    )
}
