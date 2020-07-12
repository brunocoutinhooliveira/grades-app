import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grade-brunoc-back-api.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
