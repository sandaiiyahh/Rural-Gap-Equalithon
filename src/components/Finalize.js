import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom';

const Finalize = (props) => {
  console.log(props.mediaURL);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    props.handleUpload();
  };

  const handleClose = () => setShow(false);

  return (
    <Container className="p-5 text-center">
      <h1 className="review-title">Review Recording</h1>
      <div className="row justify-content-center align-items-center">
        <div>
          <video src={props.mediaURL.media_file} type="video/mp4"></video>
        </div>
        <div className="col-4 col-md-2 mt-3">
          {props.mediaType === 'V' ? (
            <Link to="/video">
              <Button>Try Again</Button>
            </Link>
          ) : (
            <Link to="/audio">
              <Button>Try Again</Button>
            </Link>
          )}
        </div>
        <div className="col-4 col-md-2 mt-3">
          <Button onClick={handleClick}>Submit</Button>
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
