import axios from 'axios'
//base usrl changes every 7 hours
export default axios.create({
    baseURL:'http://7b84a315018b.ngrok.io/'
})