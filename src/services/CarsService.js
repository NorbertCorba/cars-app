import { axiosInstance } from "./AxiosService";

class CarsService {

    async getAll() {
        const response = await axiosInstance.get('/cars');
        return response.data;
    }

    async add(cars) {
        const response = await axiosInstance.post('/cars', cars)
        return response;
    }

    // async edit(id, newCar) {
    //     const response = await axiosInstance.put(`/cars/${id}`, newCar)
    //     return response;
    // }

    async delete(carId) {
        const response = await axiosInstance.delete(`/cars/${carId}`)
        return response;
    }
}

export default new CarsService();
