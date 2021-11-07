import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'



import { Container, Typography } from '@mui/material';

const Testimonial = () => {
    return (
        <Container sx={{ flexGrow: 1, mb: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'left' }}>
                    <Typography variant='h6' sx={{ my: 3, color: "#1cc7c1" }}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant='h3' sx={{ mb: 10 }}>
                        What's Our Patients  <br />Says
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <Paper sx={{ pt: 3 }} >
                        <Typography sx={{ p: 2 }} gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores error. Voluptatibus cumque recusandae amet molestias error neque obcaecati, officia eius aliquam laudantium?
                        </Typography>
                        <Stack direction="row" sx={{ display: 'flex', alignItems: 'center', p: 5 }} spacing={2}>
                            <Avatar alt="Remy Sharp" src={people1} />
                            <Box sx={{ textAlign: "left" }}>
                                <Typography variant="h6" sx={{ color: "#1cc7c1" }}>
                                    Winson Herry
                                </Typography>
                                <Typography variant="caption" >
                                    California
                                </Typography>
                            </Box>

                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Paper sx={{ pt: 3 }} >
                        <Typography sx={{ p: 2 }} gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores error. Voluptatibus cumque recusandae amet molestias error neque obcaecati, officia eius aliquam laudantium?
                        </Typography>
                        <Stack direction="row" sx={{ display: 'flex', alignItems: 'center', p: 5 }} spacing={2}>
                            <Avatar alt="Remy Sharp" src={people2} />
                            <Box sx={{ textAlign: "left" }}>
                                <Typography variant="h6" sx={{ color: "#1cc7c1" }}>
                                    Winson Herry
                                </Typography>
                                <Typography variant="caption" >
                                    California
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Paper sx={{ pt: 3 }} >
                        <Typography sx={{ p: 2 }} gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, asperiores error. Voluptatibus cumque recusandae amet molestias error neque obcaecati, officia eius aliquam laudantium?
                        </Typography>
                        <Stack direction="row" sx={{ display: 'flex', alignItems: 'center', p: 5 }} spacing={2}>
                            <Avatar alt="Remy Sharp" src={people3} />
                            <Box sx={{ textAlign: "left" }}>
                                <Typography variant="h6" sx={{ color: "#1cc7c1" }}>
                                    Winson Herry
                                </Typography>
                                <Typography variant="caption" >
                                    California
                                </Typography>
                            </Box>

                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonial;