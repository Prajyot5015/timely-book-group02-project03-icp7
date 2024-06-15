import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/login'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Home />);
root.render(<Login/>)


