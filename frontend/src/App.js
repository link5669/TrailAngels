
import './App.css';
import TrailMap from './components/TrailMap'
import appalachian from './data/appalachian.geojson'

import Dashboard from './components/Dashboard.js'
import NoPage from './components/NoPage.js'
import Home from './components/Home.js'
import Layout from './components/Layout.js'
import AngelSignUp from './components/AngelSignUp.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Empty from './components/Empty.js'
import BackpackerSignUp from './components/BackpackerSignUp.js'

import Login from './components/Login.js'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState();
  // console.log("rendering App")
  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="angel-signup" element={<AngelSignUp />} />
            <Route path="backpacker-signup" element={<BackpackerSignUp />} />
            <Route path="angel-signup" element={<AngelSignUp />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div className="web-container">
        <TrailMap trailGeoJSON={appalachian}></TrailMap>
      </div>

    </div>
  );
}

export default App;
