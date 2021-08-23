import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Welcome from "./Components/Welcome";
import UserProfile from "./Components/UserProfile";
import ShelterProfile from "./Components/ShelterProfile";
import Appointment from "./Components/Appointment";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import ForgetPassword from "./Components/ForgetPassword";
import ResetPassword from "./Components/ResetPassword";
import LogoutConfirmation from "./Components/LogoutConfirmation";
import AppointmentConfirmation from './Components/AppointmentConfirmation';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/user/:id" component={UserProfile} />
    <Route path="/shelter" component={ShelterProfile} />
    <Route path="/appointment" component={Appointment} />
    <Route path="/logout" component={Logout} />
    <Route path="/forget-password" component={ForgetPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/logout-confirmation" component={LogoutConfirmation} />
    <Route path="/appointment-confirmation" component={ AppointmentConfirmation}/>
  </Switch>
);
