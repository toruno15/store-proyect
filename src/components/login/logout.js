import React, { useContext } from 'react';
import UserLoginContext from '../layouts/contextLoginUsers';
//imports from Material UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import icons
import LogoutIcon from '@mui/icons-material/Logout';
//import styles
import './styles/login.css';

export default function Logout({setStateLogin}){
    const updateLoginUser = useContext(UserLoginContext);
    
    const handleSubmit = () =>{
        updateLoginUser(false, 0);
        setStateLogin(false);
    }

    return(
        <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'center',
                m: 2,
                p: 2,
            }}
        >
            <Box sx={{
                mt: 2,
                mb: 1,
                p: 1,
            }}>
                <img className="imageLogin" src="https://cdn-icons-png.flaticon.com/512/339/339737.png" alt="imagen del logout"/>
            </Box>
            <Box sx={{
                mt: 2,
                mb: 1,
                p: 1,
            }}>
                <form>
                        <Button onClick={handleSubmit} color="error" variant="contained" endIcon={<LogoutIcon />}>
                            LOGUOT
                        </Button>
                </form>
            </Box>
        </Box>
     );
}