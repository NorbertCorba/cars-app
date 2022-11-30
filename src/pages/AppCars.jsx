import React, { useState, useEffect } from "react";

import CarsService from "../services/CarsService";
import { Link } from "react-router-dom";

export default function AppCars() {
    const [cars, setCars] = useState([]);

    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        setCars(cars);
    };

    useEffect(() => {
        handleGetCars();
    }, []);

    const handleDelete = async (carId) => {
        const promtResponse = prompt(
            "Are you sure you want to delete this car ?\n Enter 'Yes' if you are"
        );

        if (promtResponse !== 'Yes') {
            return;
        }

        const response = await CarsService.delete(carId);

        if (response.status === 200) {
            setCars(cars.filter(({ id }) => id !== carId));
        }
    };
    return (
        <div>
            <h2>Our current cars list:</h2>
            {cars && cars.map((car) => (
                <div key={car.id}>
                    

                        <p><strong>Brand: </strong><Link to={`/cars/${car.id}`}>{car.brand}</Link>  -click on the car name to see this car in new tab</p>
                    
                        <p><strong>Model: </strong> {car.model}</p>
                        <p><strong>Year: </strong> {car.year}</p>
                        <p><strong>Maximum speed: </strong> {car.maxSpeed}</p>
                        <p><strong>Is it automatic: </strong>{car.isAutomatic ? 'Yes' : 'No'}</p>
                        <p><strong>Engine type: </strong>{car.engine}</p>
                        <p><strong>Number of doors: </strong>{car.numberOfDoors}</p>
                      
                        {/* <Link to={`/edit/${car.id}`}>Edit</Link> */}
                        <br />
                        <button type="submit" onClick={() => handleDelete(car.id)}>Delete</button>

                        <hr color="red"></hr>
                        <hr color="red"></hr>
                </div>
            ))}
        </div>
    );
}
