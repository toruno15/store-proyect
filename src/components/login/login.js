import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
//import icons
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
//import styles
import './styles/login.css';
//imports from reac-router
import { Link, Outlet } from 'react-router-dom';
//imports from API's
import getUser from '../../services/user/getUser';
import getUsers from '../../services/user/getUsers';

export default function Login(){
    const [inputUser, setUser] = useState({text: 'outlined-basic', label : 'User Name', value: '',error : false, textError :''});
    const [inputPassword, setPassword] = useState({text: 'outlined-basic', label : 'Password', value: '', error : false, textError :''});
    const [enableButton, setButton] = useState(true);
    const [isGood, setIsGood] = useState(false);
    const [isPerfect, setPerfect] = useState(false);

    const changeUser = (e) => {
       if((new RegExp('^\\w+$')).test(e.target.value)){
        setUser({
          text: 'outlined-basic',
          label: 'User',
          value: e.target.value,
          error: false,
          textError: ''
        });
        if(!inputPassword) setButton(false);
      }else{
        setUser({
          text: 'outlined-error-helper-text',
          label: 'Error',
          value: e.target.value,
          error: true,
          textError: 'Por favor Digite un usuario valido valido.'
        });
        setButton(true);
      }
    }

    const changePassword = (e) => {
        if((new RegExp('^\\w{8,}$')).test(e.target.value)){
            setPassword({
                text: 'outlined-basic',
                label: 'Password',
                value: e.target.value,
                error: false,
                textError: ''
            });
            if(inputUser) setButton(false);
        }else{
            setPassword({
                text: 'outlined-error-helper-text',
                label: 'Error',
                value: e.target.value,
                error: true,
                textError: 'Por favor Digite una contraseña con mas de 8 digitos.'
            });
            setButton(true);
        }
    };

    const handleSubmit = () =>{
        getUsers(inputUser.value, inputPassword.value).then(data =>{
            if(data){
                setPerfect(true);
                setIsGood(true);
            }else{
                setPerfect(false);
                setIsGood(true);
            }
        });
    }

    return (
        <React.Fragment>
             {isGood ? <StateAlert isValid={isPerfect}/> : null}
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
                            <TextField onChange={ changeUser } error={inputUser.error} id={inputUser.text} label={inputUser.label} variant="outlined" helperText={inputUser.textError}/>
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
                            <Button onClick={handleSubmit} disabled={enableButton} color="primary" variant="contained" endIcon={<LoginIcon />}>
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
                <Outlet/>
            </Box>
        </React.Fragment>
    );
}

const StateAlert = ({isValid}) =>{
    return ( (isValid
        ?
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                    Perfecto has iniciado secion
            </Alert>
        :
            <React.Fragment>
                <Alert severity="error">
                    <AlertTitle>Success</AlertTitle>
                    has ingresado la contraseña o usuario de manera incorrecta
                </Alert>
            </React.Fragment>
    ));
};