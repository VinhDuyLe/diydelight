// client/src/pages/CreateCar.jsx
import React, { useState } from 'react';
import { createCar } from '../services/CarsAPI';
import { useNavigate } from 'react-router-dom';

const CreateCar = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [exteriorColor, setExteriorColor] = useState('');  // New state for exterior color
    const [features, setFeatures] = useState({
        convertible: false,
        exterior: '',
        roof: '',
        wheels: '',
        interior: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const car = { name, price, exterior_color: exteriorColor, features };
        await createCar(car);
        navigate('/cars');
    };

    const handleFeatureChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFeatures({
            ...features,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div>
            <h1>Create a New Car</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                {/* New Color Picker for Exterior */}
                <label>Exterior Color:</label>
                <select value={exteriorColor} onChange={(e) => setExteriorColor(e.target.value)}>
                    <option value="">Select Color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Green">Green</option>
                </select>

                <label>Convertible:</label>
                <input
                    type="checkbox"
                    name="convertible"
                    checked={features.convertible}
                    onChange={handleFeatureChange}
                />

                <label>Exterior:</label>
                <input
                    name="exterior"
                    value={features.exterior}
                    onChange={handleFeatureChange}
                    required
                />

                <label>Roof:</label>
                <input
                    name="roof"
                    value={features.roof}
                    onChange={handleFeatureChange}
                    required
                />

                <label>Wheels:</label>
                <input
                    name="wheels"
                    value={features.wheels}
                    onChange={handleFeatureChange}
                    required
                />

                <label>Interior:</label>
                <input
                    name="interior"
                    value={features.interior}
                    onChange={handleFeatureChange}
                    required
                />

                <button type="submit">Create Car</button>
            </form>
        </div>
    );
};

export default CreateCar;
