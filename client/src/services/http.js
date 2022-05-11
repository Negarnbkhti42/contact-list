import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001';

const http = {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post,
    patch: axios.patch
}

export default http;