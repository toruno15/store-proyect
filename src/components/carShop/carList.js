import React from 'react';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CarShopList() {
  //states
  const [openBuy, setOpenBuy] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

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
          {rows.map((row) => (
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
                    image='https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg'
                    alt="green iguana"
                    sx={{
                      maxWidth: 300,
                      height: '100%',
                    }}
                  />
                  <CardContent sx={{m: 2}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {row.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${(row.protein * row.carbs).toFixed(2)}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{m: 2}}>
                    <DeleteToCar open={openDelete} handleClose={handleCloseDelete} />
                    <IconButton onClick={handleOpenDelete} size="large" aria-label="BuyCar" color="error">
                      <RemoveShoppingCartIcon />
                    </IconButton>
                    <BuyProduct open={openBuy} handleClose={handleCloseBuy} object={row} />
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