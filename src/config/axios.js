import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://andy-apis.herokuapp.com'
})

export default axios
