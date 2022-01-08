import React from 'react';
import CarProduct from './cardProduct';
import Box from '@mui/material/Box';
import '../../styles/card.css';
import { useParams } from 'react-router-dom';

export default function AllCardsProducts({ objects }){
    const { category_id } = useParams();

    const lista = objects.filter(object => object.categoryId == category_id).map((objeto)=>
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
                justifyContent: 'center',
                }}
            > 
                {lista}
            </Box>
        </React.Fragment>
    );
}
