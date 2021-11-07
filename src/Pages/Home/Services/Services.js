import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  ",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  ",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  ",
        img: whitening
    }

]


const Services = () => {
    return (

        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: '#1cc7c1' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Services;