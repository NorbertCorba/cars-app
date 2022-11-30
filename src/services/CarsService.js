import { httpService } from './HttpService';

class CarsService {
    constructor() {
        this.axiosInstance = httpService.axiosInstance;
    }


    async getAll() {
        const response = await this.axiosInstance.get('/cars');
        return response.data;
    }

    async add(cars) {
        const response = await this.axiosInstance.post('/cars', cars)
        return response;
    }

    // async edit(id, newCar) {
    //     const response = await axiosInstance.put(`/cars/${id}`, newCar)
    //     return response;
    // }

    async delete(carId) {
        const response = await this.axiosInstance.delete(`/cars/${carId}`)
        return response;
    }

    async get(id) {
        const response = await this.axiosInstance.get(`/cars/${id}`);
        return response;

    }
}


export default new CarsService();
