import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    marginTop: '20px'

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '500px'

}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={verticalCenter}>
                <Grid style={{ textAlign: 'left' }} item xs={12} md={6}>
                    <Typography variant="h3">
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 300, color: 'gray', my: 4 }} variant="h6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae non vitae possimus dignissimos magni ipsam beatae alias cupiditate veniam architecto.
                    </Typography>
                    <Button style={{ backgroundColor: '#4BD1D3', color: 'white' }}>Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;