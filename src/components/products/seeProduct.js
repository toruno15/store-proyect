import React, {useState, useEffect} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import { Button } from '@mui/material';
//imports of styles
import './stylesProducts/cardSee.css';
//imports of components
import BuyProduct from '../carShop/BuyProduct';
import AddProductToCar from '../carShop/addtoCarShop';
//imports of icons
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import  AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//imports of providers
import getProduct from '../../services/product/getProduct';
import { useParams } from 'react-router-dom';

export default function SeeProduct(){ 
  const [product, setProduct] = useState();
  const { product_id } = useParams();
  
  const getNewProduct = () => {
    getProduct(product_id)
    .then( (newProduct) => {
      setProduct(newProduct);
    })
  };

  useEffect(()=>{
    getNewProduct();
  }, []);

    return(
      <React.Fragment>
        { (!product )
        ? <Skelet/> 
        : <DescriptionProduct product={product}>
          <Puntuation ranking={product.ranking}/>
          <Interaction product={product}/>
        </DescriptionProduct> }
      </React.Fragment>
  );
}

const DescriptionProduct = ({ children, product }) => {
  return (
    <div className="cardToSee">
        <CardMedia
          component="img"
          sx={{ maxWidth: 700 }}
          image= {product.image}
          alt="Live from space album cover"
          className='image'
        />
        <CardContent sx={{ flex: '1 0 auto',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
          }}>
          <Typography component="div" variant="h5">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`$ ${product.price}`}
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

const Puntuation = ( {ranking} ) =>{
  const [enabledStars, setEnabledStars] = React.useState(false); 
  const [valueStars, setValueStars] = React.useState(0);
  const [updateStars, setUpdateStars] = React.useState(0);

  useEffect(()=>{
    setValueStars(ranking);
    setUpdateStars(ranking);
  }, valueStars);

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

const Interaction = ({product}) => {
  const [openBuy, setOpenBuy] = useState(false);

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
      <BuyProduct open={openBuy} handleClose={handleCloseBuy} index={product.id} />
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
      <AddProductToCar open={open} handleClose={handleClose} product={product}/>
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

const Skelet = () =>{
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Skeleton height={300} />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        <Skeleton animation={false} />
      </Box>
    </Box>
  );
}