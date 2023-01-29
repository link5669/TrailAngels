import axios from 'axios'
const baseUrl = 'http://localhost:3003/api'

const deleteLocation = (longitude, latitude) => {
    const request = axios.delete(`${baseUrl}/locations}`, {longitude, latitude})
    return request.then(response => response.data)
  }

  export default deleteLocation