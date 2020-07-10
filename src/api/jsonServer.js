import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://9b184af64b75.ngrok.io/'
})