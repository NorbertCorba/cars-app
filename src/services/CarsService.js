import { axiosInstance } from "./AxiosService";

class CarsService {

    async getAll() {
        const response = await axiosInstance.get('/cars');
        return response.data;
    }

    async add(cars) {
        const response = await axiosInstance.post("/cars", cars)
        return response;
    }
}

export default new CarsService();
