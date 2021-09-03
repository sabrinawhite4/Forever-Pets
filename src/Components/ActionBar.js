import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import heart from "../heart.svg";
import X from "../x-symbol.svg";
import pawPrint from "../better-paw.svg";
import rewind from "../rewind.svg"

function ActionBar(props) {
  let history = useHistory();
  const user = useSelector((state) => state.user.user);
  const { goToNextFn, goToPreviousFn, handleHeartFn, animal } = props;
  function handleAppointment() {
    history.push(
      `/appointment?user_id=${user._id}&animal_id=${animal._id}&shelter_id=${animal.shelter_id._id}`
    );
  }
  return (
    <div className="action-bar">
      <div className="action-btns">
        <button onClick={goToNextFn}>
          <img className="action-btn-img" src={X} alt= "next button"></img>
        </button>
        <button onClick={handleAppointment}>
          <img className="action-btn-img" src={pawPrint} alt="set appointment"></img>
        </button>
        <button onClick={handleHeartFn}>
          <img className="action-btn-img" src={heart} alt="favorite button"></img>
        </button>
        <button onClick={goToPreviousFn}>
          {" "}
          <img className="action-btn-img" src={rewind} alt="back button"></img>
        </button>
      </div>
    </div>
  );
}

export default ActionBar;
