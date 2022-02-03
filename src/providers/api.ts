import axios from 'axios';


class API {

    post(endpoint: string, data: any, headers = {}) {
        return axios.post(endpoint, data, { headers });
    }

    get(endpoint: string, params = {}, headers = {}) {
        return axios.get(endpoint, { params, headers });
    }

}

export default new API();