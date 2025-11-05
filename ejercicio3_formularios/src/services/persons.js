import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios
        .get(baseURL)
        .then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseURL}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteOne = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, deleteOne, update}