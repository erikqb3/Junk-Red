import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './TestPages/about';
import { Home } from './TestPages/home';
import { NoPage } from './TestPages/noPage';
import { MyIndex } from './TestPages/myIndex';
import {TestNav } from './TestPages/testNav';



export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><MyIndex/><TestNav/></>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
