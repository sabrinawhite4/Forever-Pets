import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Welcome from "./Views/Welcome";
import UserProfile from "./Views/UserProfile";
import ShelterProfile from "./Views/ShelterProfile";
import Appointment from "./Views/Appointment";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Logout from "./Views/Logout";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/user/:id" component={UserProfile} />
    <Route path="/shelter/:id" component={ShelterProfile} />
    <Route path="/appointment" component={Appointment} />
    <Route path="/logout" component={Logout} />
  </Switch>
);
