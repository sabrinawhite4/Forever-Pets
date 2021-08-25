import React from "react";
import { useHistory } from "react-router-dom";

function ActionBar(props) {
  let history = useHistory();
  const { goToNextFn, goToPreviousFn, handleHeartFn } = props;
  function handleAppointment() {
    history.push("/appointment");
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
