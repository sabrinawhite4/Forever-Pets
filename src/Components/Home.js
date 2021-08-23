import React, { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import { connect, useSelector, useDispatch } from "react-redux";
import { requestUserData } from "../redux/userReducer";
// import {
//   requestBudgetData,
//   addPurchase,
//   removePurchase,
// } from "./../../redux/budgetReducer";

function Home(props) {
  //const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [home, setHome] = useState(false);

  useEffect(() => {
    requestUserData("spencie2");
    // dispatch({ type: "REQUEST_USER_DATA", payload: "spencie2" });
    console.log(props.user);
  });

  return (
    <div className="App">
      <body className="App-body">
        <AnimalCard />
      </body>
    </div>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, {requestUserData})(Home);
