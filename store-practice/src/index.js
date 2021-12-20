import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//imports del react router
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imports de los componentes
import Home from './components/layouts/home';
import CarShopList from './components/carShop/carList';
import SeeProduct from './components/products/seeProduct';
import ListProducts from './components/products/listProducts';
import Main from './components/layouts/main';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={ <Main /> }>
            <Route index element={ <Home/> } />
            <Route path="list-Products" element={ <ListProducts /> } />
            <Route path="carShop-List" element={ <CarShopList/> } />
            <Route path="watchProduct" element={ <SeeProduct/> } />
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
