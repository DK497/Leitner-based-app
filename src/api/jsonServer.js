import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://0b9a2d2c1419.ngrok.io/'
})