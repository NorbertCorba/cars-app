import React, { useState } from "react";
import CreateCarForm from "../components/CreateCarForm";
import CarsService from "../services/CarsService";
import { useHistory } from "react-router-dom";


const defaultCars = {
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: "",
    engine: "",
    numberOfDoors: "",
};

export default function AddCar() {

    const history = useHistory();
    const [newCar, setNewCar] = useState(defaultCars);

    const handlerCreateNewCar = async (e) => {
        e.preventDefault();
        const newCarResponse = await CarsService.add(newCar);


        if (newCarResponse.status === 200) {
            history.push("/cars");
        }
    };

    const handlerResetForm = (newCar) => {
        setNewCar(newCar = defaultCars)
    }

    return (
        <div>
            <CreateCarForm
                newCar={newCar}
                setNewCar={setNewCar}
                onCreateNewCar={handlerCreateNewCar}
                onResetForm={handlerResetForm}
            />
        </div>
    )
}

