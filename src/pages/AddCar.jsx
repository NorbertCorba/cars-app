import React, { useState } from "react";
import CreateCarForm from "../components/CreateCarForm";
import CarsService from "../services/CarsService";
import { useHistory, useParams } from "react-router-dom";


const defaultCars = {
    brand: "",
    model: "",
    year: "",
    max_speed: "",
    is_automatic: false,
    engine: "",
    number_of_doors: "",
};

export default function AddCar() {

    const history = useHistory();
    const [newCar, setNewCar] = useState(defaultCars);
    const { id } = useParams();


    const handlerCreateNewCar = async (e) => {
        e.preventDefault();
        const response = await CarsService.add(newCar);
        if (response.status === 200) {
          setNewCar(response.data);
          history.push("/cars");
        }

    };

    // const handleEditCar = async () => {
    //     const response = await CarsService.edit(id, newCar);
    //     if (response.status === 200) {
    //       history.push("/cars");
    //     }
    //   };

    const handlerResetForm = (newCar) => {
        setNewCar(newCar = defaultCars)
    }

    const handlerPreviewForm = () => {
        alert(JSON.stringify(newCar));
    }

    return (
        <div>
            <CreateCarForm
                newCar={newCar}
                setNewCar={setNewCar}
                onCreateNewCar={handlerCreateNewCar}
                onResetForm={handlerResetForm}
                onPreviewForm={handlerPreviewForm}
                // onEditCar={handleEditCar}
            />
        </div>
    )
}

