export const getAllCars = async () => {
    const response = await fetch('/api/items');
    return response.json();
};

export const getCar = async (id) => {
    const response = await fetch(`/api/items/${id}`);
    return response.json();
};

export const createCar = async (car) => {
    const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });
    return response.json();
};

export const updateCar = async (id, car) => {
    const response = await fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });
    return response.json();
};

export const deleteCar = async (id) => {
    await fetch(`/api/items/${id}`, {
        method: 'DELETE',
    });
};
