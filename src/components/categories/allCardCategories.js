import React from 'react';
import Box from '@mui/material/Box';
import CardCategory from "./cardCategory";
import '../../styles/card.css';

export default function AllCardsCategories( {objects} ) {
    const lista = objects.map((objeto) =>
        <div key={objeto.id} class="card">
            <CardCategory category={objeto}/>
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