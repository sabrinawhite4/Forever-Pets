import React from 'react';
import ShelterInfoDisplay from './ShelterInfoDisplay';

function AppointmentConfirmation() {
    return (
    <div className="appointment-confirmation">
            <h1>Appointment Confirmed!</h1>
            <h3>We look forward to seeing you soon!</h3>
            <p> Date and Time of Appointment</p>
            <ShelterInfoDisplay />
    </div>
    )
}

export default AppointmentConfirmation;