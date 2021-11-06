
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeadet from '../AppointmentHeader/AppointmentHeadet';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeadet date={date} setDate={setDate}></AppointmentHeadet>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;