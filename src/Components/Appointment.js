import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useHistory } from "react-router-dom";
import * as QueryString from "query-string";

function Appointment() {
  const [date, setDate] = useState(new Date());
  const location = useLocation();
  const history = useHistory();
  function submit() {
    const params = QueryString.parse(location.search);
    console.log(params);
    axios.post('http://localhost:4000/api/appointment', {
      date: date,
      shelter_id: params.shelter_id,
      animal_id: params.animal_id,
      user_id: params.user_id
    }).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        history.push(`/appointment-confirmation?shelter_id=${params.shelter_id}&appointment_id=${res.data._id}`);
      } else {
        alert("Error");
      }
    });
  }

  return (
    <div>
      <h3>Pick a Playdate and Time!</h3>
      <DatePicker
        className="date-picker"
        selected={date}
        onChange={(date) => setDate(date)}
        showTimeSelect
        inline="true"
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Appointment;
