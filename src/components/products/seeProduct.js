import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
//imports of styles
import './stylesProducts/cardSee.css';
//imports of components
import BuyProduct from '../carShop/BuyProduct';
import AddProductToCar from '../carShop/addtoCarShop';
//imports of icons
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import  AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function SeeProduct(){
      return(
        <React.Fragment>
          <DescriptionProduct>
            <Puntuation />
            <Interaction/>
          </DescriptionProduct>
        </React.Fragment>    
  );
}




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const row = new createData('Frozen yoghurt', 159, 6.0, 24, 4.0);
let object = {image: 'https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' , name: 'hola', price: 0.00};

const DescriptionProduct = ({ children }) => {
  return (
    <div className="cardToSee">
        <CardMedia
          component="img"
          sx={{ maxWidth: 700 }}
          image="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-1280x720.jpg"
          alt="Live from space album cover"
          className='image'
        />
        <CardContent sx={{ flex: '1 0 auto',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
          }}>
          <Typography component="div" variant="h5">
            Nombre Producto   
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            descripcion del producto
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Precio del producto, ejemplo: {'$' + 3043.110}
          </Typography>
          <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
          }}
          >
            {children}
          </Box>
        </CardContent>
    </div>
  );
}

const Puntuation = () =>{
  const [enabledStars, setEnabledStars] = React.useState(false); 
  const [valueStars, setValueStars] = React.useState(3);
  const [updateStars, setUpdateStars] = React.useState(valueStars);

  const updateValue = (value) => {
    let thisValue = (value + updateStars) / 2;
    setUpdateStars(thisValue);
  };

  const changeStars = (event, newValue) => {
    setValueStars(newValue);
    setEnabledStars(true);
    updateValue(newValue);
  };

  return(
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Su opinion sobre este producto</Typography>
      <Rating
        name="simple-controlled"
        value={valueStars}
        disabled={enabledStars}
        onChange={changeStars}
      />
      <Typography component="legend">Opinion General</Typography>
      <Rating name="generalOpinion" value={updateStars} readOnly/>
    </Box>
  );
}

const Interaction = () => {
  const [openBuy, setOpenBuy] = React.useState(false);
  
  //funstions of states
  const handleOpenBuy = () => {
    setOpenBuy(true);
  };

  const handleCloseBuy = () => {
    setOpenBuy(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BuyProduct open={openBuy} handleClose={handleCloseBuy} object={row} />
      <Button sx={{ m: 1,
          maxWidth: 300
        }}
        className='button'
        onClick={handleOpenBuy}
        color="success"
        variant="contained"
        endIcon={<MonetizationOnIcon />}
      >
        Buy
      </Button>
      <AddProductToCar open={open} handleClose={handleClose} product={object}/>
      <Button sx={{ m: 1,
          maxWidth: 300
        }} 
        onClick={handleOpen}
        color="primary"
        variant="contained"
        endIcon={<AddShoppingCartIcon />}
      >
        Add To carShop
      </Button>
    </React.Fragment>
  );
}