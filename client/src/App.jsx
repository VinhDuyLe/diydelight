import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';  // Added Navigate for redirects
import Navigation from './components/Navigation';
import ViewCars from './pages/ViewCars';
import EditCar from './pages/EditCar';
import CreateCar from './pages/CreateCar';
import CarDetails from './pages/CarDetails';
import './App.css';

const App = () => {
  let element = useRoutes([
    {
      path: '/',    // Redirect the root URL to /customcars to view all cars
      element: <Navigate to='/customcars' />
    },
    {
      path: '/create',   // Route for creating a new car
      element: <CreateCar title='BOLT BUCKET | Customize' />
    },
    {
      path: '/customcars',  // Route for listing all cars
      element: <ViewCars title='BOLT BUCKET | Custom Cars' />
    },
    {
      path: '/customcars/:id',  // Route for viewing details of a specific car by ID
      element: <CarDetails title='BOLT BUCKET | View' />
    },
    {
      path: '/edit/:id',   // Route for editing a specific car by ID
      element: <EditCar title='BOLT BUCKET | Edit' />
    },
    {
      path: '*',    // Catch-all route to handle 404 or undefined routes
      element: <Navigate to='/' />
    }
  ]);

  return (
    <div className='app'>
      <Navigation />
      {element}
    </div>
  );
};

export default App;
