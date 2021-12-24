import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//imports of icons
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
//import from react-router
import { Link } from 'react-router-dom';

export default function Register(){
    //states
    const [inputName, setName] = useState({text: 'outlined-basic', label : 'Name', error : false, textError :''});
    const [inputLName, setLastname] = useState({text: 'outlined-basic', label : 'Last Name', error : false, textError :''});
    const [inputAge, setAge] = useState({text: 'outlined-basic', label : 'Age', error : false, textError :''});
    const [inputMail, setMail] = useState({text: 'outlined-basic', label : 'Mail', error : false, textError :''});
    const [inputPassword, setPassword] = useState({text: 'outlined-basic', label : 'Password', error : false, textError :''});

    //funciones que validan los cambios de los inputs
    const changeName = (e) =>{
        if((new RegExp('^[a-zA-Z]+$')).test(e.target.value)){
            setName({
                text: 'outlined-basic',
                label: 'Name',
                error: false,
                textError: ''
            });
            return true;
        }else{
            setName({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Por favor Digite un nombre valido.'
            });
            return false;
        }
    };

    const changeLName = (e) =>{
        if((new RegExp('^[a-zA-Z]+$')).test(e.target.value)){
            setLastname({
                text: 'outlined-basic',
                label: 'Last Name',
                error: false,
                textError: ''
            });
            return true;
        }else{
            setLastname({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Por favor Digite un apellido valido.'
            });
            return false;
        }
    };

    const changeAge = (e) =>{
        if((new RegExp('^(1[8-9])|([2-9][0-9])$')).test(e.target.value)){
            setAge({
                text: 'outlined-basic',
                label: 'Age',
                error: false,
                textError: ''
            });
            return true;
        }else{
            setAge({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Digite una edad validad por favor.'
            });
            return false;
        }
    };

    const changeMail = (e) =>{
        if((new RegExp('^\\w+@((gmail)|(yahoo)|(hotmail))\\.com$')).test(e.target.value)){
            setMail({
                text: 'outlined-basic',
                label: 'Mail',
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
    };

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

    //funcion de las acciones del formulario para registrar la cuenta
    const handleSubmit = (e) => {
        console.log('esta loca esta onda');
        //falta ver como se hacen las validaciones
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            mt: 2,
            mb: 1,
            p: 1,
        }}>
            <form>
                <Stack sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap', 
                        maxWidth: 500,
                        m: 1,
                        p: 1,
                    }}
                    spacing={4}
                >
                    <TextField onChange={ changeName } error={inputName.error} id={inputName.text} label={inputName.label} variant="outlined" helperText={inputName.textError}/>
                    <TextField onChange={ changeLName } error={inputLName.error} id={inputLName.text} label={inputLName.label} variant="outlined" helperText={inputLName.textError}/>
                    <TextField type="number" onChange={ changeAge } error={inputAge.error} id={inputAge.text} label={inputAge.label} variant="outlined" helperText={inputAge.textError}/>
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
                    <Link className="link" to="/login">
                        <Button color="secondary" variant="contained" endIcon={<DoNotDisturbIcon/>}>
                            cancelar
                        </Button>
                    </Link>
                    <Button onClick={handleSubmit} color="primary" variant="contained" endIcon={<DriveFileRenameOutlineIcon />}>
                        Create Account
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}