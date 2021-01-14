//npm i axios, fetching library
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-e987c.cloudfunctions.net/api'  //The API URL (Cloud function)
});

export default instance;


//http://localhost:5001/clone-e987c/us-central1/api (for testing)

//http://us-central1-clone-e987c.cloudfunctions.net/api (for deployment)
