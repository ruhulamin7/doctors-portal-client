import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/footer-bg.png'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

const footerBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center'
}

function Footer() {
    return (
        <Container sx={{ flexGrow: 1, height: '500px', ...verticalCenter }} style={footerBg}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" sx={{ textAlign: 'left' }}>
                        ''
                    </Typography>
                    <Typography variant='body1' sx={{ fontWeight: 400, lineHeight: '40px', color: 'text.secondary', fontSize: 14 }}>
                        <ul style={{ listStyle: 'none', textAlign: "left", padding: 0 }}>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment Of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                        </ul>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500, color: '#1cc7c1' }}>
                        Services
                    </Typography>
                    <Typography variant='body1' sx={{ fontWeight: 400, lineHeight: '40px', color: 'text.secondary', fontSize: 14 }}>
                        <ul style={{ listStyle: 'none', textAlign: "left", padding: 0 }}>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment Of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500, color: '#1cc7c1' }}>
                        Oral Health
                    </Typography>
                    <Typography variant='body1' sx={{ fontWeight: 400, lineHeight: '40px', color: 'text.secondary', fontSize: 14 }}>
                        <ul style={{ listStyle: 'none', textAlign: "left", padding: 0 }}>
                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment Of Personal Diseases</li>
                            <li>Tooth Extraction</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500, color: '#1cc7c1' }}>
                        Our Address
                    </Typography>
                    <Typography variant='body1' sx={{ fontWeight: 400, lineHeight: '40px', color: 'text.secondary', fontSize: 14 }}>
                        <ul style={{ listStyle: 'none', textAlign: "left", padding: 0 }}>
                            <li>New York - 101010 Hudson Yards</li>
                        </ul>
                    </Typography>


                    <Link>
                        <FacebookIcon fontSize="large" sx={{ m: 1, border: 1, p: 1, borderRadius: '50px', backgroundColor: '#1cc7c1', color: 'white' }}></FacebookIcon>
                    </Link>
                    <Link>
                        <TwitterIcon sx={{ m: 1, border: 1, p: 1, borderRadius: '50px', backgroundColor: '#1cc7c1', color: 'white' }} fontSize="large"></TwitterIcon>
                    </Link>
                    <Link>
                        <LinkedInIcon fontSize="large" sx={{ m: 1, border: 1, p: 1, borderRadius: '50px', backgroundColor: '#1cc7c1', color: 'white' }}></LinkedInIcon>
                    </Link>

                    <Typography variant='body1' sx={{ fontWeight: 400, lineHeight: '40px', color: 'text.secondary', fontSize: 14, textAlign: 'left' }}>
                        Call Now
                    </Typography>
                    <Button startIcon={<CallIcon />} variant="contained" style={{ backgroundColor: '#1cc7c1', }}>0134440</Button>

                </Grid>
            </Grid>
        </Container >
    );
}

export default Footer;