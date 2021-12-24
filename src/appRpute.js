import React, { useEffect } from 'react';
//imports del react router
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imports de los componentes
import Home from './components/home/home';
import CarShopList from './components/carShop/carList';
import SeeProduct from './components/products/seeProduct';
import ListProducts from './components/products/listProducts';
import Main from './components/layouts/main';
import ListCategories from './components/categories/listCategories';
import AllCardsCategories from './components/categories/allCardCategories';
//imports from API's
import { getCategories } from './services/categoriesService';

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
            <Route path="list-Products" element={ <ListProducts /> }/>
            <Route path="see-product" element={ <SeeProduct /> }/>
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