import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ActionBar(props) {
  let history = useHistory();
  const user = useSelector((state) => state.user.user);
  const { goToNextFn, goToPreviousFn, handleHeartFn, animal} = props;
  function handleAppointment() {
    history.push(`/appointment?user_id=${user._id}&animal_id=${animal._id}&shelter_id=${animal.shelter_id._id}`);
  }
  return (
    <div className="action-bar">
      <div className="action-btns">
        <button onClick={goToNextFn}>X</button>
        <button onClick={handleAppointment}>Paw Print</button>
        <button onClick={handleHeartFn}>Heart</button>
        <button onClick={goToPreviousFn}>Rewind</button>
      </div>
    </div>
  );
}

export default ActionBar;
