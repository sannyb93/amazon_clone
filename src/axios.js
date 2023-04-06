import axios from  'axios';


const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-b8b1b/us-central1/api' // THE API (cloude function) URL
});

export default instance;