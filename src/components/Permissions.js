import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Permissions() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container fluid className="py-5 text-center">
      <h1 className="permission-title">
        Lorem Ipsum dolor sit amet, consectetur adipscing elit
      </h1>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <button className="link" onClick={handleShow}>
        Read more
      </button>
      <div className="row justify-content-center">
        <div className="col-6 col-md-2 mt-3">
          <Link to="/start">
            <Button variant="primary" className="button">
              Accept
            </Button>
          </Link>
        </div>
        <div className="col-6 col-md-2 mt-3">
          <Button className="button">Decline</Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading text in a modal!</Modal.Body>
      </Modal>
    </Container>
  );
}

export default Permissions;
