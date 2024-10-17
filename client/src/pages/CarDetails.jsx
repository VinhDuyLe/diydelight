// client/src/pages/CarDetails.jsx
import React, { useState, useEffect } from 'react';
import { getCar } from '../services/CarsAPI';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            const fetchedCar = await getCar(id);  // Fetch car details by ID
            setCar(fetchedCar);  // Set the car details in state
        };
        fetchCar();
    }, [id]);

    if (!car) return <p>Loading car details...</p>;

    return (
        <div>
            <h1>{car.name}</h1>
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Convertible:</strong> {car.features.convertible ? 'Yes' : 'No'}</p>
            <p><strong>Exterior:</strong> {car.features.exterior}</p>
            <p><strong>Roof:</strong> {car.features.roof}</p>
            <p><strong>Wheels:</strong> {car.features.wheels}</p>
            <p><strong>Interior:</strong> {car.features.interior}</p>
            <p><strong>Exterior Color:</strong> {car.exterior_color}</p> {/* Display exterior color */}
        </div>
    );
};

export default CarDetails;
