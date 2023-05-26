import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav, LogoNav } from './pages/nav_comp';
import  Landing  from './pages/landing_pg';
import About from '.pages/about_pg'
import CharacterDesign from '.pages/characterDesign_pg';
import Video from '.pages/video_pg';
import reportWebVitals from './reportWebVitals';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogoNav></LogoNav>}>
          <Route index element={<Landing></Landing>}/>
          <Route path="characterDesign" element={<CharacterDesign></CharacterDesign>}/>
          <Route path="video" element={<Video></Video>}/>
          <Route path="about" element={<About></About>}/>
          <Route path="*"/>
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
