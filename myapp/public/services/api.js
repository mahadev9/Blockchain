//import axios from 'axios'

const axios = require('axios');
function Api() {
  return axios.create({
    baseURL: `http://192.168.31.162:3000/`
  })
}
