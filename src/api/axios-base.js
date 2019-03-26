import axios from 'axios';

const proxy = "https://cors-anywhere.herokuapp.com/";
const baseURL = `${proxy}http://hnbex.eu/api/v1/rates/daily/`;

const axiosInstance = axios.create({
    baseURL: baseURL
});

export default axiosInstance