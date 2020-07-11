import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://ac885637f90a.ngrok.io/'
})