 import axios from "axios"

const instance = axios.create(
    {
        baseURL: 'https://backend-tinderclonne.herokuapp.com'
    }
)


export default instance