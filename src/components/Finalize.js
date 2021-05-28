import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom';

const Finalize = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Container className="p-5 text-center">
      <h1 className="review-title">Review Recording</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-4 col-md-2 mt-3">
          <Button>Try Again</Button>
        </div>
        <div className="col-4 col-md-2 mt-3">
          <Button onClick={handleShow}>Submit</Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Thank you. Your recording was successfully submitted.
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button>Go Back To Home</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Finalize;
