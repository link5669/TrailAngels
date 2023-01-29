import axios from 'axios'
const baseUrl = 'http://localhost:3003/api'

const create = newObject => {
    const request = axios.post(`${baseUrl}/users`, newObject)
    return request.then(response => {
        if (response.status == 200) {
            window.localStorage.setItem('loggedUser', response.data.userID)
        }
        console.log(response)
    })
}

export default create