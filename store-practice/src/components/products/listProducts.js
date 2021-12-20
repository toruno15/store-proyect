import React from 'react';
import CarProduct from './cardProduct';
import Box from '@mui/material/Box';
import './stylesProducts/product.css';

let objects = [
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



function AllCards (){
    const lista = objects.slice(0,10).map((objeto, index)=>
                <div key={index} class="product">
                    <CarProduct product={objeto}/>
                </div>
        );
    return(
        <React.Fragment>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                bgcolor: 'background.paper',
                }}
            > 
                {lista}
            </Box>
        </React.Fragment>
    );
}


function ListProducts(){
    return(
        <React.Fragment>
            <AllCards/>
        </React.Fragment>
    );
}

export default ListProducts;
