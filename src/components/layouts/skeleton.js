import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Skeleto() {
  let array = [1, 2, 3, 4];  
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
        { array.map((object, index) =>
            <Box key={index + 1} 
                sx={{
                    width: 250,
                    margin: 3,    
                }}
            >
                <Skeleton variant="rectangular" Width={300} height={118} />
                <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
                </Box>
            </Box>
        )}
    </Box>
  );
}