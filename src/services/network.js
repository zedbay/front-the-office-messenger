import axios from 'axios';

class NetworkService {

    static target = 'http://localhost:8085';

    static post(endPoint, body) {
        return axios.post(this.target + endPoint, body, this.getConfig());
    }

    static get(endPoint) {
        return axios.get(`${this.target}${endPoint}`, this.getConfig());
    }

    static getConfig() {
        if (localStorage.getItem('token')) {
            return { headers: { authorization: localStorage.getItem('token') } };
        }
        return {};
    }

}

export default NetworkService;