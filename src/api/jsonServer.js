import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://19a99c1b64ce.ngrok.io/'
})