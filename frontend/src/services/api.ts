// import axios from 'axios'
// import { API_BASE_URL } from '../config/apiConfig';

// export const api = axios.create({
//     baseURL: API_BASE_URL,
//   });


import axios from 'axios'
import { API_BASE_URL } from '../config/apiConfig';

export const api = axios.create({
    baseURL: `http://localhost:3333${API_BASE_URL}`,
})

