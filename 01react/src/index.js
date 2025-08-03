import React from 'react';
// ReactDOM is the library that we use to render the app in the browser
import ReactDOM from 'react-dom/client';
import App from './App';
// a root element has to be created 
const root = ReactDOM.createRoot(document.getElementById('root'));
//render the App into HTMl so that browser can understand it
root.render(

  <App />

);

