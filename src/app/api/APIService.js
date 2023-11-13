import axios from 'axios'

// const url = 'http://dsu.vigneronluc.com';
const url = `http://localhost:3000`;


const APIService = {
    init() { },
    login(logs) {
        return axios
            .post(`${url}/api/auth/login`, logs)
    },
    get(ressource) {
        return axios
            .get(`${url}/api/${ressource}`)
    },
    getUser(ressource) {
        return axios
            .get(`${url}/api/${ressource}`)
    },
    post(ressource, data) {
        return axios
            .post(`${url}/api/${ressource}`, data)
    },
    put(ressource, data) {
        return axios
            .put(`${url}/api/${ressource}`, data)
    },
    delete(ressource) {
        return axios
            .delete(`${url}/api/${ressource}`)
    },
}

export { APIService }