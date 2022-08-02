import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app'

// import style
import './styles/appstyle.css';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);