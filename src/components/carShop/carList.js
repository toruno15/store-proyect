import React, {useState, useEffect} from 'react';
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
import getCarPorduct from '../../services/carProduct/getCarProduct';

export default function CarShopList() {
  //states
  const [openBuy, setOpenBuy] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    getNewCarPorducts(2);
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

  const getNewCarPorducts = () =>{
    getCarPorduct(2).then((data) =>{
      setProducts(data.products);
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
        <Box
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
                  <CardMedia
                    component="img"
                    image="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-1280x720.jpg"
                    alt="green iguana"
                    sx={{
                      maxWidth: 300,
                      height: '100%',
                    }}
                  />
                  <CardContent sx={{m: 2}}>
                    <Typography gutterBottom variant="h5" component="div">
                      ya la esta
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total: ${product.total}  Cant: {product.cant}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{m: 2}}>
                    <DeleteToCar open={openDelete} handleClose={handleCloseDelete} />
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
      </Box>
    </React.Fragment>
  );
}