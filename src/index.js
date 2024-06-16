import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from './components/AboutUsCard/AboutUsCard'
import LoginForm from './components/LoginForm/login';
import FoodList from './components/FoodList/FoodList';
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
    }
])


root.render(<RouterProvider router={router} />);


