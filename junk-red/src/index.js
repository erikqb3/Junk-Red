// import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import './scss/landing.css';
import {LogoNav, Nav}from './js/nav_comp';
import {Landing} from './js/landing_pg';
import reportWebVitals from './reportWebVitals';

import {videoInRibbon} from './assets/imgs/img_landing';


const main = 
  <main>
    <LogoNav></LogoNav>
    <Landing></Landing>
    <Nav></Nav>
    <div id="ribbon">
      {/* <video 
        autoplay="true" 
        loop="true" 
        muted="true"
        playbackRate="0.5">
        <source src={videoInRibbon} ></source>
      </video> */}
    </div>
  </main>


const h1 = <h1>HELLOW</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  main
);

reportWebVitals();

