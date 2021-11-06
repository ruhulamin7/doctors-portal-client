import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Container, Grid, Typography } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';


const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    marginTop: '20px',
    height: '500px'
}
const AppointmentHeadet = ({ date, setDate }) => {

    return (
        <Container style={bannerBg}>

            <Grid container spacing={2}>
                <Grid item xs={8} md={6}>
                    <Typography variant="h3">
                        Appointment
                    </Typography>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={4} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default AppointmentHeadet;