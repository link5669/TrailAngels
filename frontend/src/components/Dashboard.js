import React from 'react';

import { useState, createRef, forwardRef, useImperativeHandle } from 'react'

const Dashboard = forwardRef((props, ref) => {
  const [firstAid, setFirstAid] = useState(false);
  const [foodWater, setFoodWater] = useState(false);
  const [transportation, setTransportation] = useState(false);
  const [shelter, setShelter] = useState(false);

  const toggleFirstAid = (e) => {
    setFirstAid(!firstAid)
    props.filterRef.current.toggleVisibility("firstAid", firstAid)
  }

  const toggleFoodWater = (e) => {
    setFoodWater(!foodWater)
    props.filterRef.current.toggleVisibility("foodWater", foodWater)
  }

  const toggleTransportation = (e) => {
    setTransportation(!transportation)
    props.filterRef.current.toggleVisibility("transportation", transportation)
  }

  const toggleShelter = (e) => {
    setShelter(!shelter)
    props.filterRef.current.toggleVisibility("shelter", shelter)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleFirstAid: toggleFirstAid,
      toggleFoodWater: toggleFoodWater,
      toggleTransportation: toggleTransportation,
      toggleShelter: toggleShelter
    }
  })
  <>
      <h2>Dashboard</h2>
      <label>
        <input onClick={() => toggleFirstAid()} type="checkbox" defaultChecked={true} />
        First Aid
      </label>
      <label>
        <input onClick={() => toggleFoodWater()} type="checkbox" defaultChecked={true} />
        Food/Water
      </label>
      <label>
        <input onClick={() => toggleTransportation()} type="checkbox" defaultChecked={true}/>
        Transportation
      </label>
      <label>
        <input onClick={() => toggleShelter()} type="checkbox" defaultChecked={true}/>
        Shelter
      </label>
    </>
  );
})

export default Dashboard
