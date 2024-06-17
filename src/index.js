import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About'
import LoginForm from './components/LoginForm/login';
import FoodList from './components/FoodList/FoodList';
<<<<<<< HEAD
import OrderNow from './components/OrderNow/OrderNow';
=======
import Food from './views/Food/Food';
>>>>>>> 8812cad8f2d2aa9ad61b3bbe2fdcd706dc128e7d
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/login',
        element: <LoginForm />
    },
    {
        path: '/foodlist',
        element: <FoodList />
    },
    {
<<<<<<< HEAD
        path: '/OrderNow',
        element: <OrderNow/>
=======
        path : '/food',
        element: <Food />
>>>>>>> 8812cad8f2d2aa9ad61b3bbe2fdcd706dc128e7d
    }
])


root.render(<RouterProvider router={router} />);


