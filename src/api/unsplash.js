import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 945d9d8fd3ed43caa1a549e64f53e45a923a2b492a58408971c5ea26e4233751'
  }
});