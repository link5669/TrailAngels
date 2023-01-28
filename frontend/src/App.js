import logo from './logo.svg';
import './App.css';
import TrailMap from './components/TrailMap'
import appalachian from './data/appalachian.geojson'

function App() {
  console.log("rendering App")
  return (
    <div className="App">
      <div className="web-container">
        <TrailMap trailGeoJSON={appalachian}></TrailMap>
      </div>
    </div>
  );
}

export default App;
