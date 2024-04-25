import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {retries: 3});
axios.defaults.withCredentials = true;
const BASE_URL = 'https://bariran.co';
const API_URL = 'https://192.168.88.100:443';

export default {
    blogs() {
        const promise = axios({
            method: 'get',
            url: `${BASE_URL}/blog/allBlogs.json`,
            withCredentials: true,
            data: {

            }
        });
        return promise;
    },

};
