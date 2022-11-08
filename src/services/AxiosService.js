import axios from "axios";

class AxiosService {
    constructor() {
        this.AxiosServiceFromLibrary = axios.create({
            baseURL: 'http://localhost:3000/api'
        });
    }
}

export const axiosInstance = new AxiosService().AxiosServiceFromLibrary;
