import React, { useState } from 'react';
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom'
import '../styles/Dropdown.css'

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
        routeChange()
    }

    return (
        <div className="specs-wrapper">
            <h1>What Trail Magic can you provide?</h1>
            <form onSubmit={handleSubmit}>
            <Dropdown options={trailOptions} value={selectedTrail} onChange={(e) => {
                setSelectedTrail(e.value);
      }}/>
            <button type="submit" className="submit-angel-specs"></button>
            </form>
        </div>

    )
}