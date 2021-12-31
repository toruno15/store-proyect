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
import Alert from '@mui/material/Alert';
//import incons
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
//imports of Apis
import addCarProduct from '../../services/carProduct/addCarProduct';

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

export default function AddProductToCar({open, handleClose, product}) {
  const [inputCant, setInputCant] = useState({text: 'outlined-basic', label : 'Cant', value: '', error : false, textError :''});
  const [enableButton, setButton] = useState(true);
  const [isGood, setGood] = useState(false);

  const changeInput = (e) => {
     if((new RegExp('^[1-9][0-9]?$')).test(e.target.value)){
      setInputCant({
        text: 'outlined-basic',
        label: 'Cant',
        error: false,
        textError: '',
        value: e.target.value
      });
      setButton(false);
    }else{
      setInputCant({
        text: 'outlined-error-helper-text',
        label: 'Error',
        error: true,
        textError: 'ERROR!. Digite un número mayor a cero.',
        value: e.target.value
      });
      setButton(true);
    }
  }

  const handleSubmit = () => {
    addCarProduct({
      userId: 2,
      products: {
        productId: product.id,
        total: (product.price * inputCant.value),
        cant: inputCant.value
      }
    }, 2).then(data =>{
      console.log(data);
    });
    setGood(true);
    setInputCant({text: 'outlined-basic', label : 'Cant', value: '', error : false, textError :''});
    setTimeout(()=>{
      handleClose();
    }, 2500);
  };
  
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
                <Button onClick={handleSubmit} disabled={enableButton} color="success" variant="contained" endIcon={<ShoppingCartCheckoutIcon />}>
                  Send
                </Button>
              </Stack>
            </Box>
          </CardActions>
          { isGood ?
            <Stack sx={{ width: '100%' }} spacing={2}> 
              <Alert>El o Los productos ha sido agregado al carrito. !!Revisalo!!</Alert>
            </Stack>
            : null
          }
        </Card>
      </Modal>
    </React.Fragment>
  );
}