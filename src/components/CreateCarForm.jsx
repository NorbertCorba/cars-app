import React from "react";
import RadioButtonComponent from "./RadioButtonComponent";

const yearsFunc = (start = 1990, end = 2018) => {
    return Array.apply(0, Array(end - start + 1))
        .map((element, index) => index + start);
};

const years = yearsFunc();

export default function CreateCarForm({
    id,
    newCar,
    setNewCar,
    onCreateNewCar,
    onResetForm,
    onPreviewForm,
    onEditCar
}) {
    return (
        <form className="form" onSubmit={onCreateNewCar}>
            <label>Brand:</label>
            <input
                required
                minLength={2}
                type="text"
                value={newCar.brand}
                onChange={({ target }) =>
                    setNewCar({ ...newCar, brand: target.value })
                }
            /><br />
            <label>Model:</label>
            <input
                required
                minLength={2}
                type="text"
                value={newCar.model}
                onChange={({ target }) =>
                    setNewCar({ ...newCar, model: target.value })
                }
            /><br />
            <label>Year:</label>
            <select
                required
                value={newCar.year}
                onChange={({ target }) =>
                    setNewCar({ ...newCar, year: target.value })
                }
            >{(years.map((year, index) => (

                <option key={index}>{year}</option>
            )))}
            </select>
            <br />
            <label>Max Speed:</label>
            <input
                type="number"
                min="0"
                value={newCar.maxSpeed}
                onChange={({ target }) =>
                    setNewCar({ ...newCar, maxSpeed: target.value })
                }
            /><br />
            <label>Is Automatic:</label>
            <input
                type="checkbox"
                onChange={({ target }) => (target.checked
                    ?
                    setNewCar({ ...newCar, isAutomatic: "Yes" }) :
                    setNewCar({ ...newCar, isAutomatic: "No" }))
                }

            /><br />
            <label>Type of engine:</label>
            <RadioButtonComponent
                label="Diesel"
                value="Diesel"
                state={newCar.engine}
                onChange={(value) =>
                    setNewCar({ ...newCar, engine: value })
                }
            />
            <RadioButtonComponent
                label="Petrol"
                value="Petrol"
                state={newCar.engine}
                onChange={(value) =>
                    setNewCar({ ...newCar, engine: value })
                }
            />
            <RadioButtonComponent
                label="Hybrid"
                value="Hybrid"
                state={newCar.engine}
                onChange={(value) =>
                    setNewCar({ ...newCar, engine: value })
                }
            />
            <RadioButtonComponent
                label="Electric"
                value="Electric"
                state={newCar.engine}
                onChange={(value) =>
                    setNewCar({ ...newCar, engine: value })
                }
            />
            <br />
            <label>Number of doors:</label>
            <input
                required
                type="number"
                value={newCar.numberOfDoors}
                onChange={({ target }) =>
                    setNewCar({ ...newCar, numberOfDoors: target.value })
                }
            /><br />
                <button className="button" type="submit">{!id ? 'Add' : 'Edit'}</button> :
            <button className="button" onClick={onResetForm}> <strong>RESET THE FORM</strong></button>
            <br />
            <button className="button" onClick={onPreviewForm}> <strong>PREVIEW</strong></button>

        </form>

    )
}