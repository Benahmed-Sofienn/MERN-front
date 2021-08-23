import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addContact, editContact } from "../../JS/actions/contact";
import { Link } from "react-router-dom";

import "./AddEditeContact.css";

const AddEditeContact = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const edit = useSelector((state) => state.contactReducer.edit);
  const contactRed = useSelector((state) => state.contactReducer.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    edit
      ? setContact(contactRed)
      : setContact({ name: "", email: "", phone: "" });
  }, [edit, contactRed]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  console.log(contact);

  return (
    <div className="addEdit">
      <>
        <InputGroup className="mb-3 input">
          <i className="fas fa-user-alt"></i>
          <FormControl
            aria-label="Text input with checkbox"
            placeholder="Enter contact name ..."
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="input">
          <i className="fas fa-envelope-square" ></i>
          <FormControl
            aria-label="Text input with radio button"
            placeholder="Enter contact email ..."
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="input">
          <i className="fas fa-mobile-alt"></i>
          <FormControl
            aria-label="Text input with radio button"
            placeholder="Enter contact phone number ..."
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </InputGroup>
        {edit ? (
          <Link to="/">
            <Button
              variant="dark"
              onClick={() => dispatch(editContact(contact._id, contact))}
            >
              edit
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button
              variant="dark"
              onClick={() => dispatch(addContact(contact))}
            >
              add
            </Button>
          </Link>
        )}
      </>
    </div>
  );
};

export default AddEditeContact;
