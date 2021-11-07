import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import bg from '../../../images/appointment-bg.png'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';


const contactBg = {
    background: `url(${bg})`,
    marginTop: '150px',
    backgroundColor: 'rgba(35, 39, 91 , 0.8)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'darken, luminosity',
}


const ContactUs = () => {
    const handleSubmit = (e) => {
        alert('Form submitted')
        e.preventDefault()

    }

    return (
        <Box sx={{ flexGrow: 1 }} style={contactBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant='h6' sx={{ my: 3, color: "#1cc7c1" }}>
                        CONTACT US
                    </Typography>
                    <Typography variant='h4' sx={{ mb: 10, color: "white" }}>
                        Always Connect With Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={12} md={12} >
                                <TextField
                                    sx={{ backgroundColor: 'white', mb: 3 }}
                                    style={{ width: '50%' }}
                                    placeholder="Your Email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white', mb: 3 }}
                                    style={{ width: '50%' }}
                                    placeholder="Subject"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextareaAutosize
                                    minRows={6}
                                    placeholder="New Message"
                                    style={{ maxWidth: '50%', minWidth: '50%', padding: '20px', fontSize: '18px', boxSizing: 'border-box' }}
                                />
                            </Grid>
                        </Grid>
                        <Button variant='contained' type="submit" sx={{ backgroundColor: '#1cc7c1', color: 'white', m: 4 }}>SUBMIT</Button>
                    </form>

                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;