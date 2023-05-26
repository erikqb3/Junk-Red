// import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import './scss/landing.css';
import {LogoNav, Nav}from './js/nav_comp';
import {Landing} from './js/landing_pg';
import reportWebVitals from './reportWebVitals';
import { helperFunctions } from './js/helperFunctions';

import { useRef } from "react";
import {videoInRibbon} from './assets/imgs/img_landing';


function Ribbon (){
  const pageList = ["characterDesign","video","about"];
  const currentPage = helperFunctions.getCurrentPage(pageList);
  
  const videoRef = useRef();
  const setPlayBack = ()=> {
    videoRef.current.playbackRate = 0.5;
  }

  let ribbon_tag;
  
  
  if (currentPage == "index"){
    ribbon_tag = 
    <div id="ribbon">
      <video 
        autoPlay={true} 
        loop={true} 
        muted={true}
        ref={videoRef}
        onCanPlay={()=> setPlayBack()}>
        <source src={videoInRibbon} ></source>
      </video>
    </div>
  }
  else {
    ribbon_tag=
      <div id="ribbon"></div>
  }

  
  return (
    ribbon_tag
  )
}



const main = 
  <main>
    <LogoNav></LogoNav>
    <Landing></Landing>
    <Nav></Nav>
    <Ribbon></Ribbon>
  </main>


const h1 = <h1>HELLOW</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  main
);

reportWebVitals();

