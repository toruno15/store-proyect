import React from 'react';
import Box from '@mui/material/Box';
import CardCategory from "./cardCategory";
import '../../styles/card.css';

export default function AllCardsCategoriesHome( {objects} ) {
    const lista = objects.slice(0, 4).map((objeto, index) =>
        <div key={index} class="card">
            <CardCategory category={objeto}/>
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