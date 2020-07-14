import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://2832d515cc44.ngrok.io/'
})