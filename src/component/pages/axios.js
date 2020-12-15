import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/emazon-clone-chalange/us-central1/api'
  });

export default instance;