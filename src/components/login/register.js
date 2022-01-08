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
//imports of formik
import {
    Formik,
    Form
} from 'formik';
//imports of API's
import addUser from '../../services/user/addUser';

export default function Register(){
    //states
    const [inputName, setName] = useState({text: 'outlined-basic', label : 'Name', value: '', error : false, textError :''});
    const [inputUserName, setUserName] = useState({text: 'outlined-basic', label : 'user Name', value: '', error : false, textError :''});
    const [inputAge, setAge] = useState({text: 'outlined-basic', label : 'Age', value: '', error : false, textError :''});
    const [inputMail, setMail] = useState({text: 'outlined-basic', label : 'E-Mail', value: '', error : false, textError :''});
    const [inputPassword, setPassword] = useState({text: 'outlined-basic', label : 'password',  value: '', error : false, textError :''});
    //estado que contyrola si el boton estara habilitado o no
    const [dissabledButton, setButton] = useState(true);

    //funciones que validan los cambios de los inputs
    const changeName = (e) =>{
        if((new RegExp('^[a-zA-Z]+$')).test(e.target.value)){
            setName({
                text: 'outlined-basic',
                label: 'Name',
                error: false,
                textError: '',
                value: e.target.value
            });
            enabledButton();
        }else{
            setName({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Por favor Digite un nombre valido.',
                value: e.target.value
            });
            setButton(true);
        }
    };

    const changeUserName = (e) =>{
        if((new RegExp('^\\w+$')).test(e.target.value)){
            setUserName({
                text: 'outlined-basic',
                label: 'user Name',
                error: false,
                textError: '',
                value: e.target.value
            });
            enabledButton();
        }else{
            setUserName({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Por favor Digite un apellido valido.',
                value: e.target.value
            });
            setButton(true);
        }
    };

    const changeAge = (e) =>{
        if((new RegExp('^(1[8-9])|([2-9][0-9])$')).test(e.target.value)){
            setAge({
                text: 'outlined-basic',
                label: 'Age',
                error: false,
                textError: '',
                value: e.target.value
            });
            enabledButton();
        }else{
            setAge({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Digite una edad validad por favor.',
                value: e.target.value
            });
            setButton(true);
        }
    };

    const changeMail = (e) =>{
        if((new RegExp('^\\w+@((gmail)|(yahoo)|(hotmail))\\.com$')).test(e.target.value)){
            setMail({
                text: 'outlined-basic',
                label: 'E-Mail',
                error: false,
                textError: '',
                value: e.target.value
            });
            enabledButton();
        }else{
            setMail({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Por favor Digite un correo electronico valido.',
                value: e.target.value
            });
            setButton(true);
        }
    };

    const changePassword = (e) => {
        if((new RegExp('^\\w{8,}$')).test(e.target.value)){
            setPassword({
                text: 'outlined-basic',
                label: 'Password',
                error: false,
                textError: '',
                value: e.target.value
            });
            enabledButton();
        }else{
            setPassword({
                text: 'outlined-error-helper-text',
                label: 'Error',
                error: true,
                textError: 'Por favor Digite una contraseña con mas de 8 digitos.',
                value: e.target.value
            });
            setButton(true);
        }
    };

    //metodo para validar si se puede usar el btton de registrar o no
    const enabledButton = () =>{
        if(inputName.value.length !== 0 && inputUserName.value.length !== 0 && inputAge.value.length !== 0 && inputMail.value.length !== 0 && inputPassword.value.length !== 0){
            setButton(false);
        }else{
            return setButton(true);
        }
    };

    //metodo para limpiar los inputs
    const cleanInputs = () =>{
        setName({text: 'outlined-basic', label : 'Name', value: '', error : false, textError :''});
        setUserName({text: 'outlined-basic', label : 'user Name', value: '', error : false, textError :''});
        setAge({text: 'outlined-basic', label : 'Age', value: '', error : false, textError :''});
        setMail({text: 'outlined-basic', label : 'E-Mail', value: '', error : false, textError :''});
        setPassword({text: 'outlined-basic', label : 'password',  value: '', error : false, textError :''});
        setButton(true);
    };

    return (
        <Formik
            initialValues={{name: '', user_name: '',  age: '', email: '', password: '' }}
            onSubmit={() => {
                addUser({
                    name: inputName.value,
                    userName: inputUserName.value,
                    type: "client",
                    age: inputAge.value,
                    email: inputMail.value,
                    password: inputPassword.value
                });
                cleanInputs();
            }}
        >
        {({handleSubmit}) => (
        <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                mt: 2,
                mb: 1,
                p: 1,
        }}>
            <Form onSubmit={handleSubmit}>
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
                    <TextField type="text"  name="name" onChange={ changeName } value={inputName.value} error={inputName.error} id={inputName.text} label={inputName.label} variant="outlined" helperText={inputName.textError}/>
                    <TextField type="text"  name="user_name" onChange={ changeUserName } value={inputUserName.value} error={inputUserName.error} id={inputUserName.text} label={inputUserName.label} variant="outlined" helperText={inputUserName.textError}/>
                    <TextField type="number" name="age" onChange={ changeAge } value={inputAge.value} error={inputAge.error} id={inputAge.text} label={inputAge.label} variant="outlined" helperText={inputAge.textError}/>
                    <TextField type="email" name="email" onChange={ changeMail } value={inputMail.value} error={inputMail.error} id={inputMail.text} label={inputMail.label} variant="outlined" helperText={inputMail.textError}/>
                    <TextField type="password"  name="password" onChange={ changePassword } value={inputPassword.value} error={inputPassword.error} id={inputPassword.text} label={inputPassword.label} variant="outlined" helperText={inputPassword.textError}/>
                </Stack>
                <Stack sx={{
                        m: 1,
                        p: 1,
                    }}
                    spacing={4}
                    direction='row'
                >
                    <Link className="link" to="/false/0/login">
                        <Button color="secondary" variant="contained" endIcon={<DoNotDisturbIcon/>}>
                            cancel
                        </Button>
                    </Link>
                    <Button type="submit" disabled={dissabledButton} color="primary" variant="contained" endIcon={<DriveFileRenameOutlineIcon />}>
                        Create Account
                    </Button>
                </Stack>
            </Form>
        </Box>
      )}
    </Formik>
    );
}




