import axios from "axios";

class AxiosService {
    constructor() {
        this.AxiosServiceFromLibrary = axios.create({
            baseURL: 'http://127.0.0.1:8000/api'
        });
    }
}

export const axiosInstance = new AxiosService().AxiosServiceFromLibrary;
