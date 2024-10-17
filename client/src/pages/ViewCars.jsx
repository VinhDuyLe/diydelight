import React, { useState, useEffect } from 'react';
import { getAllCars, deleteCar } from '../services/CarsAPI';
import { Link, useNavigate } from 'react-router-dom';

const ViewCars = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            const fetchedCars = await getAllCars();
            setCars(fetchedCars);
        };
        fetchCars();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this car?');
        if (confirmDelete) {
            await deleteCar(id);
            setCars(cars.filter((car) => car.id !== id)); 
        }
    };

    return (
        <div>
            <h1>View Cars</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cars.map((car) => (
                    <div key={car.id} className="car-card">
                        <div className="car-info">
                            <h3>{car.name}</h3>
                            <p><strong>Price:</strong> ${car.price}</p>
                        </div>
                        <div className="car-actions">
                            <button
                                onClick={() => navigate(`/edit/${car.id}`)}
                                style={styles.editButton}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(car.id)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/create')} style={styles.createButton}>
                    Create New Car
                </button>
            </div>
        </div>
    );
};

const styles = {
    createButton: {
        padding: '10px 20px',
        backgroundColor: 'var(--primary)',
        color: 'var(--color)',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default ViewCars;
