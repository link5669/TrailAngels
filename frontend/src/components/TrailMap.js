import mapboxgl from 'mapbox-gl';
import { myKey } from '../private/key';
import { useRef, useEffect, useState } from 'react'
import '../styles/TrailMap.css'

/**
 * 
 * @param {*} props trailGeoJSON is a geoJSON with trail data to be loaded onto the map, and markerGeoJSON is a geoJSON with Marker coordinates
 * @returns 
 */
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
            'line-join':'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#ff3500',
            'line-width': 8
          }
        })
      }

      /**
       * Helper method for loading angel markers onto the map
       */
      const loadMarkers = (geoJSON) => {
        const points = Object.keys(geoJSON);
        
        // create a marker for each feature in the angel location geoJSON
        for (const feature of geoJSON.features) {
          const el = document.createElement('div');
          el.className= 'marker';
          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
              new mapboxgl.Popup({offset: 25})
              .setHTML(
                `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
              )
            )
            .addTo(map)
        }
      }

      return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
      );
}