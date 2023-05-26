import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { Outlet, Link } from "react-router-dom";


export function NoPage(){
  return (
    <>
    <h1>NoPage</h1>
    <Link to="about">About</Link>
    <Outlet/>
    </>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

