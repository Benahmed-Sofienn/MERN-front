import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteContact,
  getContact,
  toggleTrue,
} from "../../JS/actions/contact";
import userImg from "../../assets/Img/userImg.jpg";
import "./ContactCard.css";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className ='contactCard'>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={userImg} alt="userImg"  />
        <Card.Body>
          <Card.Title>User</Card.Title>
          {/* <img src={userImg} alt="userImg" /> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <h2>{contact.name}</h2>
          <h4>{contact.email}</h4>
          <h3>{contact.phone}</h3>
        </ListGroup>
        <Card.Body className='btn'>
          <Button
            variant="dark"
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            Delete
          </Button>
          <Link to={`/editContact/${contact._id}`}>
            <Button
              variant="dark"
              onClick={() => {
                dispatch(getContact(contact._id));
                dispatch(toggleTrue());
              }}
            >
              Edite
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
