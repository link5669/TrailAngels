import axios from 'axios'
const baseUrl = 'http://localhost:3003/api'

const create = newObject => {
    const request = axios.post(`${baseUrl}/users`, newObject)
    return request.then(response => {
        if (response.status == 200) {
            window.localStorage.setItem('loggedUser', response.data.userID)
        }
    })
}

const getUsername = (ID) => {
    const request = axios.get(`${baseUrl}/username/${ID}`)
    return request.then(response => response.data)
}

export {
    create,
    getUsername
}
