import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '9.00 AM - 10.00 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 10
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '6.00 PM - 7.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '7.00 PM - 8.00 PM',
        space: 10
    },

]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)

    return (
        <Container>
            <Typography variant="h4" sx={{ color: '#4BD1D3', my: 5 }}>Available appointment on {date.toDateString()}</Typography>

            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully ! </Alert>
            }

            <Grid container spacing={2}>
                {
                    bookings.map(booking =>
                        <Booking key={booking.id}
                            date={date}
                            booking={booking}
                            setBookingSuccess={setBookingSuccess}
                        ></Booking>)
                }
            </Grid>
        </Container>

    );
};

export default AvailableAppointment;