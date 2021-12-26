import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//import incons
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
//imports of formik
import {
    Formik,
    Form
} from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
//falta hacer la interacion de enviar el producto al carrito y verlo
//tambien hay que ver si de alguna manera se modifica el carrito del logo para el contador

export default function AddProductToCar({open, handleClose, product}) {
  const [inputCant, setInputCant] = useState({text: 'outlined-basic', label : 'Cant', value: '', error : false, textError :''});

  const changeInput = (e) => {
     if((new RegExp('^[1-9][0-9]?$')).test(e.target.value)){
      setInputCant({
        text: 'outlined-basic',
        label: 'Cant',
        error: false,
        textError: '',
        value: e.target.value
      });
    }else{
      setInputCant({
        text: 'outlined-error-helper-text',
        label: 'Error',
        error: true,
        textError: 'ERROR!. Digite un número mayor a cero.',
        value: e.target.value
      });
    }
  }

//falta terminar este metodo solo es de hacer la api y mandar el objeto ahi
  /*
  const handleSubmit = ()=>{

  };
  */
  return (
    <React.Fragment>
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
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <h2 id="parent-modal-title">{product.name}</h2>
            <p id="parent-modal-price">
              price: ${product.price}
            </p>
          </CardContent>
          <CardActions>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField type="number" name="cant" onChange={changeInput} value={inputCant.value} error={inputCant.error} id={inputCant.text} label={inputCant.label} variant="outlined" helperText={inputCant.textError}/>
              <Stack spacing={3} direction="row">
                <Button onClick={handleClose} color="secondary" variant="outlined" endIcon={<CancelIcon />}>
                  Cancel
                </Button>
                <Button color="success" variant="contained" endIcon={<ShoppingCartCheckoutIcon />}>
                  Send
                </Button>
              </Stack>
            </Box>
          </CardActions>
        </Card>
      </Modal>
    </React.Fragment>
  );
}


//las alerts o toast notifications
/*import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

 */