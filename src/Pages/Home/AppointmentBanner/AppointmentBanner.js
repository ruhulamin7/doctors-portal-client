import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography, Container } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: '150px',
    backgroundColor: 'rgba(35, 39, 91 , 0.8)',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} >
                        <img src={doctor} style={{ marginTop: "-120px", width: "400px" }} alt="doctor" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 3 }} style={{ color: "#4BD1D3" }} >
                                Appointment
                            </Typography>
                            <Typography variant="h4" style={{ color: 'white' }} >
                                Make an appointment today
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam placeat ex blanditiis iusto excepturi. Consequuntur beatae commodi velit sint.
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#4BD1D3' }}>Learn More</Button>
                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;