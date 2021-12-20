import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//import incons
import CancelIcon from '@mui/icons-material/Cancel';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

export default function BuyProduct( {open, handleClose, object} ){
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-price"
      >
        <Card sx={{...style, maxWidth: 800}}>
          <CardMedia
            component="img"
            height="140"
            image='https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg'
            alt="green iguana"
          />
          <CardContent>
            <h2 id="parent-modal-title">{object.name}</h2>
            <p id="parent-modal-price">
              price: ${object.protein}
            </p>
          </CardContent>
          <CardActions>
            <form>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <Stack spacing={3} direction="row">
                  <Button onClick={handleClose} color="secondary" variant="outlined" endIcon={<CancelIcon />}>
                    Cancel
                  </Button>
                  <Button color="success" variant="contained" endIcon={<PriceCheckIcon />}>
                    Buy
                  </Button>
                </Stack>
              </Box>
            </form>
          </CardActions>
        </Card>
      </Modal>
    );
} 