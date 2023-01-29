import axios from 'axios'
const baseUrl = 'http://localhost:3003/api'

const create = newObject => {
  const request = axios.post(`${baseUrl}/users`, newObject)
  return request.then(response => response.data)
}

export default create