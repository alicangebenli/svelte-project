import axios, {type AxiosInstance } from 'axios';

const createHttpHelper = (): AxiosInstance => {
    const httpHelper: AxiosInstance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    });
    return httpHelper;
};

export default createHttpHelper;