import React, { useState } from 'react';
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom'
import '../styles/AngelSpecs.css'
import appalachian from '../data/appalachian.geojson'
import TrailMap from './TrailMap'
import {create} from '../services/locations'

// Hard coded but should be passed in as parameter
const trailOptions = ["Appalachian Trail"]

export default function AngelSpecs() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/angel-signup`;
        navigate(path);
    }
    const [selectedTrail, setSelectedTrail] = useState('Trail')
 
    function handleSubmit(e) {
        e.preventDefault();
        create({userID: window.localStorage.getItem('loggedUser'), type: "Feature", geometry: {type: "Point", coordinates: []}, properties: {title: "Angel Station", description: "Angel Station", type: "firstAid"}})
        routeChange()
    }

    return (
        <Dropdown options={trailOptions} value={selectedTrail} onChange={(e) => {
                    setSelectedTrail(e.value);
                }} />
                <div map-wrapper>
                    <TrailMap trailGeoJSON={appalachian} addMarkerEnabled={true}></TrailMap>
                </div>
                <div className="magic-specs-wrapper">
                    <h3>Double click on your station!</h3>
                    <h3>or Enter your coordinates:</h3>
                    <input type="number" className="lat-input" placeholder='Latitude'>
                    </input>
                    <input type="number" classname="lon-input" placeholder="Longitude"></input>
                </div>
                <button type="submit" className="submit-angel-specs">Submit</button>
      </div>
            <button type="submit" className="submit-angel-specs">Submit</button>

            </form>
        </div>

    )
}
