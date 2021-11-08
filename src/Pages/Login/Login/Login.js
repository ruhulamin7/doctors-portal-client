import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, LinearProgress, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { isLoading, user, authError, loginUser } = useAuth()


    const location = useLocation()
    const history = useHistory()



    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault()
    }

    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                        />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink to="/register">
                            <Button variant="text">New User? Pleaser Register</Button>
                        </NavLink>
                    </form>
                    {isLoading && <LinearProgress />}
                    {user.email && <Alert severity="success">Login Successfull !</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;