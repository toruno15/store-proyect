import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ChangecarContext from '../layouts/contextCarShop';
//imports of Materil UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
//import from box
import Box from '@mui/material/Box';
//import of icons
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import IconButton from '@mui/material/IconButton';
//imports of styles
import './styles/carList.css';
//imports of componnets
import BuyProduct from './BuyProduct';
import DeleteToCar from './deleteProductToCar';
//imports from API's
import getProduct from '../../services/product/getProduct';
import getCarPorduct from '../../services/carProduct/getCarProduct';

export default function CarShopList() {
  //states
  const [openBuy, setOpenBuy] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [products, setProducts] = useState([]);
  const [car, setCar] = useState(null);
  //state of params of url
  const { userId } = useParams();
  //states of context
  const setContCar = useContext(ChangecarContext);

  useEffect(()=>{
    getNewCar();
  }, []);

  //funstions of states
  const handleOpenBuy = () => {
    setOpenBuy(true);
  };

  const handleCloseBuy = () => {
    setOpenBuy(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const getNewCar = () =>{
    getCarPorduct(userId).then(data => {
      if(Object.keys(data).length !== 0){
        setCar(data);
        setProducts(data.products);
        setContCar(data.cantTotal);
      }
    });
  };

  return (
    <React.Fragment>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            p: 2,
            m: 2,
          }}
        >
          <h1>Mis Productos</h1>
        </Box>
        { car
          ?<Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
              flexWrap:  'wrap',
              p: 1,
              m: 1,
            }}
          >
            {products.map((product) => (
                <Card sx={{
                  minWidth: 280,
                  maxWidth: 1000,
                  m: 2,
                }}>
                  <CardActionArea sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                    <CardOfImage ident={product.productId}/>
                    <CardContent sx={{m: 2}}>
                      <Typography gutterBottom variant="h5" component="div">
                        ya la esta
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total: ${product.total}  Cant: {product.cant}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{m: 2}}>
                      <DeleteToCar open={openDelete} handleClose={handleCloseDelete} index={product.productId} carShopObjects={products} />
                      <IconButton onClick={handleOpenDelete} size="large" aria-label="BuyCar" color="error">
                        <RemoveShoppingCartIcon />
                      </IconButton>
                      <BuyProduct open={openBuy} handleClose={handleCloseBuy} ident={product.productId} />
                      <IconButton onClick={handleOpenBuy} size="large" aria-label="BuyCar" color="success">
                        <MonetizationOnIcon />
                      </IconButton>
                    </CardActions>
                  </CardActionArea>
                </Card>      
            ))}
          </Box>
          : <h3>No existe ningun Producto aun</h3>
        }
      </Box>
    </React.Fragment>
  );
}


const CardOfImage = ({ident}) =>{
  const [image, setImage] = useState('');

  const getNewProduct = () =>{
    getProduct(ident).then(data => {
      setImage(data.image);
    });    
  };

  useEffect(() =>{
    getNewProduct();
  }, []);
  
  return(
    <CardMedia
      component="img"
      image = {image}
      alt="imagen del producto"
      sx={{
        maxWidth: 300,
        height: '100%',
      }}
    />
  );
};