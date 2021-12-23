import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import ListImages from './images';
import { Typography } from '@mui/material';
//import of components
import ListCategories from '../categories/listCategories';
import AllCards from '../layouts/allCards';
import ListProducts from '../products/listProducts';
import AllCardsCategoriesHome from '../categories/allCardcategoriesHome';


//objetos de ejemplo
let productsObjects = [
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00}
];

let categoriesObjects = [
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'},
  {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg', name: 'nombre categoria', description: 'una descripcioncita de la categoria'}
];


//hayq ue arreglar el responsive de los Boxes
export default function Home(){
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
          alignItems: 'center'
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Categories
          </Typography>
          <ListCategories>
            <AllCardsCategoriesHome objects={categoriesObjects}/>
          </ListCategories>
        </Box>
        <Divider/>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Products
          </Typography>
          <ListProducts>
            <AllCards objects={ productsObjects }/>
          </ListProducts>
        </Box>
      </Box>
    </React.Fragment>
  );
}