import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import from box
import Box from '@mui/material/Box';
//import of icons
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { IconButton } from '@mui/material';
//imports of styles
import './styles/carList.css';
//imports of componnets
import BuyProduct from './BuyProduct';
import DeleteToCar from './deleteProductToCar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          p: 2,
          m: 2,
          bgcolor: 'background.paper',
        }}
      >
        <h1>Tabla de Porductos</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap:  'wrap',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
          <Table aria-label="customized table"  align="right">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Cant</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
                <StyledTableCell align="center">Buy</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="center">
                    <img src='https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles-696x463.jpg' class='image-carList'/>
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="center">${(row.protein * row.carbs).toFixed(2)}</StyledTableCell>
                  <StyledTableCell align="center">
                    <DeleteToCar open={openDelete} handleClose={handleCloseDelete} />
                    <IconButton onClick={handleOpenDelete} size="large" aria-label="BuyCar" color="error">
                      <RemoveShoppingCartIcon />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <BuyProduct open={openBuy} handleClose={handleCloseBuy} object={row} />
                    <IconButton onClick={handleOpenBuy} size="large" aria-label="BuyCar" color="success">
                      <MonetizationOnIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </React.Fragment>
  );
}
