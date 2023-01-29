
import './App.css';
import TrailMap from './components/TrailMap'
import appalachian from './data/appalachian.geojson'

import Dashboard from './components/Dashboard.js'
import NoPage from './components/NoPage.js'
import Home from './components/Home.js'
import Layout from './components/Layout.js'
import AngelSignUp from './components/AngelSignUp.js'
import AngelSpecs from './components/AngelSpecs'
import Login from './components/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Empty from './components/Empty.js'
import BackpackerSignUp from './components/BackpackerSignUp.js'

import { useState, useRef, createRef } from 'react'

function App() {
  const [token, setToken] = useState();
  const [firstAid, setFirstAid] = useState(false);
  const [foodWater, setFoodWater] = useState(false);
  const [transportation, setTransportation] = useState(false);
  const [shelter, setShelter] = useState(false);

  const filterRef = createRef()
  const checkboxRef = createRef()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard filterRef={filterRef} ref={checkboxRef} />} />
            <Route path="angel-signup" element={<AngelSignUp />} />
            <Route path="backpacker-signup" element={<BackpackerSignUp />} />
            <Route path="angel-signup" element={<AngelSignUp />} />
            <Route path="*" element={<NoPage />} />
            <Route path="angel-specs" element={<AngelSpecs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
