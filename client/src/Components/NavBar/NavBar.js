import React from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { toggleFalse } from "../../JS/actions/contact";

import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="NavBar">
      <Link to="/">
        <Button variant="secondary">Contact List</Button>
      </Link>
      <Link to="/addContact">
        <Button variant="secondary" onClick={() => dispatch(toggleFalse())}>
          Add Contact
        </Button>
      </Link>
    </div>
  );
};

export default NavBar;
