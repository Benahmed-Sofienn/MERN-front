import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../JS/actions/contact";
import ContactCard from "../../Components/ContactCard/ContactCard";

import "./ContactList.css";

const ContactList = () => {
  const listContacts = useSelector(
    (state) => state.contactReducer.listContacts
  );
  const load = useSelector((state) => state.contactReducer.load);
  console.log(load);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="contactList">
      {load && <h1>waiiiit</h1>}
      {listContacts.map((contact) => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactList;
