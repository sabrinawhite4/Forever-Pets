import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as QueryString from "query-string";
import axios from "axios";

function AppointmentConfirmation() {
  const location = useLocation();
  const params = QueryString.parse(location.search);
  const [shelter, setShelter] = useState({});
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}shelters/${params.shelter_id}`)
      .then((res) => {
        setShelter(res.data);
      });
    axios
      .get(
        `${process.env.REACT_APP_API_URL}appointment/${params.appointment_id}`
      )
      .then((res) => {
        setAppointment(res.data);
        console.log(res.data);
      });
  }, [params.shelter_id, params.appointment_id]);

  return (
    <div className="appointment-confirmation">
      <h1>Appointment Confirmed!</h1>
      <h3>We look forward to seeing you soon!</h3>
      <h4>
        Date & Time:{" "}
        {new Date(appointment.date).toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "short",
        })}
      </h4>

      <div>
        <h1>{shelter.name}</h1>
        <h2>
          {shelter.street}, {shelter.city}, {shelter.state} {shelter.zip}
        </h2>
        <h3>{shelter.email}</h3>
        <h3>{shelter.phone_number}</h3>
      </div>
    </div>
  );
}

export default AppointmentConfirmation;
