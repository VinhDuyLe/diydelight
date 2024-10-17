// client/src/pages/ViewCars.jsx
import React, { useState, useEffect } from 'react';
import { getAllCars, deleteCar } from '../services/CarsAPI';
import { Link } from 'react-router-dom';

const ViewCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const fetchedCars = await getAllCars();
            setCars(fetchedCars);
        };
        fetchCars();
    }, []);

    const handleDelete = async (id) => {
        await deleteCar(id);
        setCars(cars.filter((car) => car.id !== id)); // Remove deleted car from the state
    };

    return (
        <div>
            <h1>View Cars</h1>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.name} - ${car.price}
                        <Link to={`/edit/${car.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(car.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/create">Create New Car</Link>
        </div>
    );
};

export default ViewCars;
