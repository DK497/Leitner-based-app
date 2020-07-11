import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://8e6926130cf0.ngrok.io/'
})