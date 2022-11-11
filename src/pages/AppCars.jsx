import React, { useState, useEffect } from "react";

import CarsService from "../services/CarsService";

export default function AppCars() {
    const [cars, setCars] = useState([]);

    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        setCars(cars);
    };

    useEffect(() => {
        handleGetCars();
    }, []);
    console.log(cars[0]);
    return (
        <div>
            {cars && cars.map((car) => (
            <div key={car.id}>
                <p><strong>Brand: </strong>{car.brand}</p>
                <p><strong>Model: </strong> {car.model}</p>
                <p><strong>Year: </strong> {car.year}</p>
                <p><strong>Maximum speed: </strong> {car.maxSpeed}</p>
                <p><strong>Is it automatic: </strong>{car.isAutomatic ? 'Yes' : 'No'}</p>
                <p><strong>Engine type: </strong>{car.engine}</p>
                <p><strong>Number of doors: </strong>{car.numberOfDoors}</p>
                <hr color="red"></hr>
                <hr color="red"></hr>
            </div>
                ))}
        </div>
    );
}
