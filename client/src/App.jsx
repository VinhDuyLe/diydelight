import React from 'react';
import { useRoutes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ViewCars from './pages/ViewCars';
import EditCar from './pages/EditCar';
import CreateCar from './pages/CreateCar';
import CarDetails from './pages/CarDetails';
import './App.css';

const App = () => {
  let element = useRoutes([
    {
      path: '/',            // Root URL (can be homepage or any other page)
      element: <ViewCars title='BOLT BUCKET | Custom Cars' />
    },
    {
      path: '/create',      // Set up the /create URL to display the CreateCar page
      element: <CreateCar title='BOLT BUCKET | Customize' />
    },
    {
      path: '/customcars',  // List all custom cars
      element: <ViewCars title='BOLT BUCKET | Custom Cars' />
    },
    {
      path: '/customcars/:id', // View car details
      element: <CarDetails title='BOLT BUCKET | View' />
    },
    {
      path: '/edit/:id',    // Edit a car
      element: <EditCar title='BOLT BUCKET | Edit' />
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
