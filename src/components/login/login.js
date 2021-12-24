import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//import icons
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
//import styles
import './styles/login.css';
//imports from reac-router
import { Link, Outlet } from 'react-router-dom';

export default function Login(){
    const [inputMail, setMail] = useState({text: 'outlined-basic', label : 'Mail', error : false, textError :''});
    const [inputPassword, setPassword] = useState({text: 'outlined-basic', label : 'Password', error : false, textError :''});
    const changeMail = (e) => {
       if((new RegExp('^\\w+@((gmail)|(yahoo)|(hotmail))\\.com$')).test(e.target.value)){
        setMail({
          text: 'outlined-basic',
          label: 'mail',
          error: false,
          textError: ''
        });
      }else{
        setMail({
          text: 'outlined-error-helper-text',
          label: 'Error',
          error: true,
          textError: 'Por favor Digite un correo electronico valido.'
        });
      }
    }

    const changePassword = (e) => {
        if((new RegExp('^\\w{8,}$')).test(e.target.value)){
            setPassword({
                text: 'outlined-basic',
                label: 'Password',
                error: false,
                textError: ''
            });
        }else{
            setPassword({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Por favor Digite una contraseña con mas de 8 digitos.'
            });
        }
    };

    const handleSubmit = () =>{
        console.log("bien echooo crack");
    }

    return (
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
                <img className="imageLogin" src="https://us.123rf.com/450wm/123vector/123vector1803/123vector180300209/97210458-ilustraci%C3%B3n-del-icono-de-persona-sobre-fondo-blanco.jpg?ver=6" alt="imagen de login"/>
            </Box>
            <Box sx={{
                mt: 2,
                mb: 1,
                p: 1,
            }}>
                <form>
                    <Stack sx={{ m: 1, p: 1}} direction="column" spacing={2}>
                        <TextField onChange={ changeMail } error={inputMail.error} id={inputMail.text} label={inputMail.label} variant="outlined" helperText={inputMail.textError}/>
                        <TextField type="password" onChange={ changePassword } error={inputPassword.error} id={inputPassword.text} label={inputPassword.label} variant="outlined" helperText={inputPassword.textError}/>
                    </Stack>
                    <Stack sx={{
                            m: 1,
                            p: 1,
                        }}
                        spacing={4}
                        direction='row'
                    >
                        <Link className="link" to='/login/register'>
                            <Button color="secondary" variant="contained" endIcon={<AppRegistrationIcon/>}>
                                Register
                            </Button>
                        </Link >
                        <Button onClick={handleSubmit} color="primary" variant="contained" endIcon={<LoginIcon />}>
                            Login
                        </Button>
                    </Stack>
                </form>
            </Box>
            <Outlet/>
        </Box>
    );
}
