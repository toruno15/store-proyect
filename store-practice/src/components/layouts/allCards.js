import React from 'react';
import CarProduct from '../products/cardProduct';
import Box from '@mui/material/Box';
import '../../styles/card.css';

export default function AllCards({ objects }){
    const lista = objects.slice(0, 4).map((objeto, index)=>
        <div key={index} class="card">
            <CarProduct product={objeto}/>
        </div>
    );
    return(
        <React.Fragment>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                }}
            > 
                {lista}
            </Box>
        </React.Fragment>
    );
}
