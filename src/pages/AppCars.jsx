import React, { useState, useEffect } from "react";

import CarsService from "../services/CarsService";

export default function AppCars() {
    const [cars, setCars] = useState({
        brand: "",
        model: "",
        year: 0,
        maxSpeed: 0,
        isAutomatic: true,
        engine: "",
        numberOfDoors: 0,
        id: 0
    });

    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        setCars(cars);
    };

    useEffect(() => {
        handleGetCars();
    }, []);

    return (
        <div>
            <ul>
                {cars && cars.map((car) =>( 
                <>
                <li key={car.id}>{car.brand}</li>
                <li key={car.id}>{car.model}</li>
                <li key={car.id}>{car.year}</li>
                <li key={car.id}>{car.maxSpeed}</li>
                <li key={car.id}>{car.isAutomatic}</li>
                <li key={car.id}>{car.engine}</li>
                <li key={car.id}>{car.numberOfDoors}</li>
                <li key={car.id}>{car.id}</li>
                </> 
                ))}
            </ul>
        </div>
    );
}
