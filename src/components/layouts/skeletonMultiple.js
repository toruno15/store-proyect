import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletoMultiple() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];  
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