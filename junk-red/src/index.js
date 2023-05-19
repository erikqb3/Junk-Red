// import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import './scss/landing.css';
import LogoNav from './js/nav_comp';
import Landing from './js/landing_pg';
import reportWebVitals from './reportWebVitals';


const main = 
  <main>
    <LogoNav></LogoNav>
    <Landing></Landing>
    <div id="ribbon"></div>
  </main>


const h1 = <h1>HELLOW</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  main
);

reportWebVitals();

