import React, { useState } from 'react';
import { ReactDOM } from 'react';
import './login.css';
import Container from 'react-bootstrap/Container';
import { TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { initializeApp, app, auth, connected } from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";// Firebase SignIn Method

function Login() {

    const navigate = useNavigate();

    // States for getting the values of login form

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailVal = (e) => {
        setEmail(e.target.value);
    }

    const passwordVal = (e) => {
        setPassword(e.target.value);
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const loginMethod = () => {
        // const userCredential = await signInWithEmailAndPassword(auth, email, password)

        // console.log("User Info", userCredential);

        // alert("LogIn Successfully")


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User", user)
                alert("Login Successfully");
                navigate("/chatScreen")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", errorMessage);
            });
    }

    return (
        <div className='main-for-login' >
            <Container fluid className="login-container" >
                <div className="inner-login" >
                    <div className="childs-login" >
                        <TextField id="outlined-basic" label="Email" variant="outlined" className="child" type="email"
                            color="secondary" onChange={(e) => emailVal(e)} />
                    </div>

                    <div className="childs-login" >
                        {/* <TextField id="outlined-basic" label="Password" variant="outlined" className="child" sx4
                        type="password"/> */}
                        <FormControl variant="outlined" onChange={(e) => passwordVal(e)} >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput color="secondary"
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <div className="login-btn-div" >
                        <Button type="primary" className="submit-btn" onClick={loginMethod} >Login</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login;