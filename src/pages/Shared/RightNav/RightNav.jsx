import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-secondary" className="mt-3">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </div>
      <div className="mt-3">
        <h4>Find Us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF></FaFacebookF> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;
