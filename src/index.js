import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About'
import LoginForm from './components/LoginForm/login';
import FoodList from './components/FoodList/FoodList';
import OrderNow from './components/OrderNow/OrderNow';
import Food from './views/Food/Food';
import AboutCardPage from './views/AboutCardPage/AboutCardPage';
import FoodCardPage from './views/FoodCardPage/FoodCardPage';
import MovieBookNow from './components/MovieBookNow/MovieBookNow';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetails from  './views/MovieDetails/MovieDetail';





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
        path: '/food',
        element: <Food />
    },
    {
        path: "/aboutcardpage/:id",
        element: <AboutCardPage />
    },
    {
        path: "/aboutfoodcardpage/:id",
        element: <FoodCardPage />
    },
    {

        path: "/OrderNow/:id",
        element: <OrderNow />
    },

    {
        path: 'MovieBookNow',
        element: <MovieBookNow/>
    },
   {

        path:"/movie/:id",
        element:<MovieDetails/>

    }
 

])


root.render(<RouterProvider router={router} />);


