import axios from 'axios'
const baseUrl = 'http://localhost:3003/api'

const getAll = () => {
  const request = axios.get(`${baseUrl}/locations`)
  return request.then(response => {
    console.log(response)
    const data = response.data
    const geojson = {
        type: 'FeatureCollection',
        features: []
    }
    console.log(data,"alksjd")
    for (let i = 0; i < data.length; i++) {
      console.log(data[i])
        geojson.features.push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [Number(data[i].geometry.coordinates[0].longitude), Number(data[i].geometry.coordinates[0].latitude)]
            },
            properties: {
                title: data[i].properties.title,
                description: data[i].properties.description,
                type: data[i].properties.type
            }
        })
    }
    return geojson
  })
}

const getUserData = (id) => {
  const request = axios.get(`${baseUrl}/userData/${id}`)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export { 
  getAll,
  getUserData,
  create, 
  update 
}
