import React, { useState, useEffect } from 'react';
import { getCar, updateCar } from '../services/CarsAPI';
import { useParams, useNavigate } from 'react-router-dom';

const EditCar = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [features, setFeatures] = useState({
        convertible: false,
        exterior: '',
        roof: '',
        wheels: '',
        interior: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCar = async () => {
            const car = await getCar(id);
            setName(car.name);
            setPrice(car.price);
            setFeatures(car.features);
        };
        fetchCar();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedCar = { name, price, features };
        await updateCar(id, updatedCar);
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
            <h1>Edit Car</h1>
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

                <button type="submit" style={styles.saveButton}>
                    Save Changes
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
    saveButton: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};

export default EditCar;
