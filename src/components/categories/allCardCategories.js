import React from 'react';
import Box from '@mui/material/Box';
//import componnet
import CardCategory from "./cardCategory";
//import styles
import '../../styles/card.css';
//import from router-dom
import { Link } from 'react-router-dom';

export default function AllCardsCategories( {objects} ) {
    const lista = objects.map((objeto) =>
        <div key={objeto.id} class="card">
            <Link className='link' to={`/categories/products/${objeto.id}`}>
                <CardCategory category={objeto}/>
            </Link>
        </div>
    );
    return(
        <React.Fragment>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                }}
            > 
                {lista}
            </Box>
        </React.Fragment>
    );
}