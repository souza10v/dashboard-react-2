import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:3333"
})


export const apiv1 = axios.create({
    baseURL: "http://localhost:3333/ap1/v1"
})
