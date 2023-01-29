import mapboxgl from 'mapbox-gl';
import { myKey } from './private/key.js';
import { useRef, useEffect, useState } from 'react'

export default function GenerateMap(props) {

  mapboxgl.accessToken = myKey;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.4025);
  const [lat, setLat] = useState(41.8268);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [lng, lat],
      zoom: zoom
    });
    console.log(map.style)
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('load', () => {
      addTrail(props.trailGeoJSON)
    })
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));

    });

  })

  /**
   * Helper method for adding a trail to the map.
   * @param {} geoJSON 
   */
  const addTrail = (geoJSON) => {
    map.current.addSource('trail', {
      'type': 'geojson',
      'data': geoJSON
    }
    )
    map.current.addLayer({
      'id': 'trail',
      'type': 'line',
      'source': 'trail',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#888',
        'line-width': 8
      }
    })
  }

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}