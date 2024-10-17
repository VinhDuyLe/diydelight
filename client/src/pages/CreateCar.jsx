import React, { useState } from 'react';
import { createCar } from '../services/CarsAPI';
import { useNavigate } from 'react-router-dom';

const CreateCar = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [exteriorColor, setExteriorColor] = useState('');
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
        navigate('/customcars');
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
            <form onSubmit={handleSubmit} style={styles.form}>
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

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

                <button type="submit" style={styles.createButton}>
                    Create Car
                </button>
            </form>
        </div>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
        margin: '0 auto',
    },
    createButton: {
        padding: '10px 20px',
        backgroundColor: '#2196F3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};

export default CreateCar;
