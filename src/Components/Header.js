import React from 'react';
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../ForeverPetsLogoFinal.svg"
import {useLocation} from 'react-router-dom';

function Header() {
  const location = useLocation().pathname;
  const isLogin = location === "/login" || location === "/register" || location === "/logout";
  console.log(location);
    return (
      <div className="fp-header">
        <div>
          <img className="logo" src={Logo} alt="Forever Pets"></img>
        </div>
        {!isLogin ? (
          <Dropdown className="dropdown-menu">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i class="fas fa-bars fa-2x"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-display">
              <Dropdown.Item>
                <Link to="/">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/user">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/shelter">Shelter Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/logout">Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : null}
      </div>
    );
}

export default Header;