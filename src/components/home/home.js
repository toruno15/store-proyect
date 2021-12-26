import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import ListImages from './images';
import { Typography } from '@mui/material';
//import of components
import ListCategories from '../categories/listCategories';
import AllCards from '../layouts/allCards';
import ListProducts from '../products/listProducts';
import AllCardsCategoriesHome from '../categories/allCardcategoriesHome';
//import from API's
import { getCategories } from '../../services/categoriesService';
import { getProducts } from '../../services/productsService';

export default function Home(){
  const [products, setProduts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  useEffect(()=>{
    getAllProducts();
    getAllCategories();
  }, []);

  const getAllProducts = () => {
    getProducts()
    .then( (newProducts) => {
      setProduts(newProducts);
    })
  };

  const getAllCategories = () => {
    getCategories()
    .then( (newCat) => {
      setCategories(newCat);
    });
  };

  return(
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <ListImages/>
      </Box>
      <Divider/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
          mb: 3,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Categories
          </Typography>
          <ListCategories>
            <AllCardsCategoriesHome objects={categories} />
          </ListCategories>
        </Box>
        <Divider/>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            mt: 3,
            mb: 3,
            }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Products
          </Typography>
          <ListProducts>
            <AllCards objects={ products }/>
          </ListProducts>
        </Box>
      </Box>
    </React.Fragment>
  );
}