import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';
import { width } from '@mui/system';

const ExceptionalDental = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 20, pb: 10 }}>
                <Grid item xs={12} sm={4} md={5} >
                    <img src={treatment} alt="" style={{ width: "100%", }} />
                </Grid>
                <Grid item xs={12} sm={8} md={6} style={{ textAlign: 'left' }} >
                    <Typography variant="h3" gutterBottom component="div">
                        Exceptional Dental <br /> Care, On Your Terms
                    </Typography>

                    <Typography sx={{ color: 'gray', my: 5, lineHeight: '30px' }} variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Button style={{ backgroundColor: '#1cc7c1' }} variant="contained">Learn More</Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default ExceptionalDental;