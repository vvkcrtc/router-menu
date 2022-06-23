

import { BrowserRouter as Router } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import {  NavLink } from "react-router-dom";

import React from 'react';

import HomePage from "./HomePage.js";
import DriftPage from "./DriftPage.js";
import ForzaPage from "./ForzaPage.js";
import TimeAttackPage from "./TimeAttackPage.js";


function Menu() {

  return (
    <div className='menu'>
      <NavLink className='menu__item' to="/">Главная</NavLink>
      <NavLink className='menu__item' to="/drift">Дрифт-такси</NavLink>
      <NavLink className='menu__item' to="/forza">Time Attack</NavLink>      
      <NavLink className='menu__item' to="/timeattack">Forza Karting</NavLink>
    </div>
  );
}

 
export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


