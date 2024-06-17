import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About'
import LoginForm from './components/LoginForm/login';
import FoodList from './components/FoodList/FoodList';

import OrderNow from './components/OrderNow/OrderNow';

import Food from './views/Food/Food';

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

        path: '/OrderNow',
        element: <OrderNow/>
    },
    {
        path : '/food',
        element: <Food />

    }
])


root.render(<RouterProvider router={router} />);


