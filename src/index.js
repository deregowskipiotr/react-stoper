import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
//import 'font-awesome/css/font-awesome.min.css';


const root = createRoot(document.querySelector('#root')); // createRoot(container!) if you use TypeScript
root.render(<App />);