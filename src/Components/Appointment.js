import React, { useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Appointment() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <label>
        Name:
        <input />
      </label>
      <label>
        Email:
        <input />
      </label>
      <label>
        Phone Number:
        <input />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Appointment;
