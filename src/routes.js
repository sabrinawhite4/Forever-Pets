import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import ShelterProfile from "./Components/ShelterProfile";
import Appointment from "./Components/Appointment";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import ForgetPassword from "./Components/ForgetPassword";
import ResetPassword from "./Components/ResetPassword";
import LogoutConfirmation from "./Components/LogoutConfirmation";
import AppointmentConfirmation from "./Components/AppointmentConfirmation";
import MerchPage from "./Components/MerchPage";
import Success from "./Components/Success";
import Cancel from "./Components/Cancel";
import ForgotPasswordConfirmation from './Components/ForgotPasswordConfirmation';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/user" component={UserProfile} />
    <Route path="/shelter" component={ShelterProfile} />
    <Route path="/appointment" component={Appointment} />
    <Route path="/logout" component={Logout} />
    <Route path="/forget-password" component={ForgetPassword} />
    <Route path="/forget-password-confirmation" component={ForgotPasswordConfirmation} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/logout-confirmation" component={LogoutConfirmation} />
    <Route path="/appointment-confirmation" component={AppointmentConfirmation} />
    <Route path="/merch" component={MerchPage} />
    <Route path="/merch-success" component={Success} />
    <Route path="/merch-cancel" component={Cancel} />
  </Switch>
);
