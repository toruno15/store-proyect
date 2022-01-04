import React from 'react';
import CarProduct from './cardProduct';
import Box from '@mui/material/Box';
import '../../styles/card.css';

export default function AllCardsProducts({ objects }){
    const lista = objects.map((objeto)=>
        <div key={objeto.id} class="card">
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
