import logo from './logo.svg';
import './App.css';
import TrailMap from './TrailMap'
import appalachian from './data/appalachian.geojson'

import Dashboard from './components/Dashboard.js'
import NoPage from './components/NoPage.js'
import Home from './components/Home.js'
import Layout from './components/Layout.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  console.log("rendering App")
  return (
    <div className="App">
      <h1>Trail Magic</h1>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <div className="web-container">
        <TrailMap trailGeoJSON={appalachian}></TrailMap>
      </div> */}

    </div>
  );
}

export default App;
