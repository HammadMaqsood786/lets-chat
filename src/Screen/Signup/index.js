import React, { useState, useRef } from "react";
import { ReactDOM } from "react";
import './signup.css';
import Container from 'react-bootstrap/Container';
import { TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, Space } from 'antd';
import { initializeApp, app, auth, connected, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom"; // From react router dom
import { collection, addDoc, setDoc, doc } from "firebase/firestore";  //Firebase method
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; //Firebase create user method


function SignupScreen() {

    // =========== States for getting the value of Signup form ============== //

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [gender, setGender] = useState("");

    const [ authError, setAuthError ] = useState("");

    const navigate = useNavigate();

    // <<<<<<<<<<<<<< Hide & Show Password >>>>>>>>>>>>>> //

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // ========== For gender select =========== //

    const currencies = [
        {
            value: 'male',
            label: 'Male',
        },
        {
            value: 'female',
            label: 'Female',
        },
        {
            value: 'other',
            label: 'Other',
        },
    ];

    const fullNameVal = (e) => {
        setFullName(e.target.value);
    }

    const emailVal = (e) => {
        setEmail(e.target.value);
    }

    const passwordVal = (e) => {
        setPassword(e.target.value);
    }

    const phoneNumberVal = (e) => {
        setPhoneNumber(e.target.value);
    }

    const genderVal = (e) => {
        setGender(e.target.value);
    }

    console.log("Value", gender);

    // ========== Sign up Method =========== //

    let errorElem = useRef();

    const signUp = async () => {
        // if (email == "" || password == "" || phoneNumber == "" || fullName == "" || gender == "") {
        //     alert("All fields required to be filled");
        // } else {
        //     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        //     console.log("User uid", userCredential.user.uid);
        //     await addUserToDb(userCredential.user.uid);
        // }

        if (email == "") {
            alert("Email required")
        } else if (password == "") {
            if (password.length < 6) {
                alert("Password must be equals or greater than 6 characters")
            }
            alert("Password required")
        } else if (phoneNumber == "") {
            alert("Phone number required");
        } else if (fullName == "") {
            alert("Name required")
        } else if (gender == "") {
            setAuthError("gender required");
            // errorElem = 'Hello' ;
            // alert("Gender required")
        } else {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log("User uid", userCredential.user.uid);
            await addUserToDb(userCredential.user.uid);
        }

    }

    const addUserToDb = async (uid) => {
        try {
            return setDoc(doc(db, "users", uid), { fullName, email, phoneNumber, gender });
            console.log("Data stored successfully");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className="main-for-signup" >
            {/* <h2 className="top-heading" >Wellcome to letsChat</h2> */}
            <Container fluid className="signup-container"  >
                <div className="inner-signup" >
                    <div className="childs" >
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" className="child" sx4
                            color="secondary" onChange={(e) => fullNameVal(e)} />
                    </div>

                    <div className="childs" >
                        <TextField id="outlined-basic" label="Email" variant="outlined" className="child" sx4 type="email" onChange={(e) => emailVal(e)}
                            color="secondary" />
                    </div>

                    <div className="childs" >
                        {/* <TextField id="outlined-basic" label="Password" variant="outlined" className="child" sx4
                        type="password"/> */}
                        <FormControl variant="outlined" className='child' onChange={(e) => passwordVal(e)} >
                            <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
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

                    <div className="childs" >
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" className="child" type="number" onChange={(e) => phoneNumberVal(e)}
                            color="secondary" />
                    </div>

                    <div className="childs" >
                        <TextField
                            className="child"
                            color="secondary"
                            // id="outlined-select-currency"
                            select
                            label="Gender"
                            defaultValue="male"
                            onChange={(e) => genderVal(e)}
                        // helperText="this is a select"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}   >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>

                    <div className="submit-btn-div" >

                        <span className="goto-login" onClick={() => navigate('/login')}  >Aleady have an account</span>

                        <Button type="primary" className="submit-btn" onClick={signUp}>Sign up</Button>
                    </div>
                </div>
            </Container>

            <p ref={errorElem}></p>
        </div>


    )
}

export default SignupScreen;