import axios from 'axios'

const options = {
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  params: {q: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Key': '38bebc5830mshf6956d502a7ee44p158d09jsn12ca6a8e30b5',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const instance = axios.create({
  options
})

export default instance