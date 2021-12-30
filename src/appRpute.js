import React, { useEffect } from 'react';
//imports del react router
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imports de los componentes
import Home from './components/home/home';
import CarShopList from './components/carShop/carList';
import SeeProduct from './components/products/seeProduct';
import Main from './components/layouts/main';
import ListCategories from './components/categories/listCategories';
import AllCardsCategories from './components/categories/allCardCategories';
import Login from './components/login/login';
//imports from API's
import { getCategories } from './services/categoriesService';
import Register from './components/login/register';

export function AppRoute(){
  const[categories, setCategories] = React.useState([]);
  
  useEffect(() =>{
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    getCategories()
    .then( (newCat) => {
      setCategories(newCat);
    });
  };

    return(
      <Router>
        <Routes>
          <Route path="/" element={ <Main /> }>
            <Route index element={ <Home/> } />
            <Route path="login" element={ <Login /> }/>
            <Route path="login/register" element={<Register/>} />
            <Route path="product/see-product/:product_id" element={ <SeeProduct /> }/>
            <Route path="carShop-List" element={ <CarShopList/> } />
            <Route path="categories" element={
              <ListCategories>
                <AllCardsCategories objects={categories}/>
              </ListCategories> } 
            />
          </Route>
        </Routes>
      </Router>
    );
}