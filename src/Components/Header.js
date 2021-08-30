import React from 'react';
import { Link } from "react-router-dom";
import  Dropdown from "react-bootstrap/Dropdown";

function Header() {
    return (
      <div>
        <div>
          <h1>Forever Pets!</h1>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Username
          </Dropdown.Toggle>
          <Dropdown.Menu>
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
      </div>
    );
}

export default Header;