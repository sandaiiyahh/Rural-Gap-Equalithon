import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Webcam from 'react-webcam';
import Question from './Question';

const Video = (props) => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Question />
        </div>
      </div>
      <div className="row justify-content-center mb-2">
        <div className="col-7">
          <Webcam audio={true} ref={props.webcamRef} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          {props.capturing ? (
            <Link to="/finish">
              <Button className="btn-block" onClick={props.handleStopCapture}>
                Stop Recording
              </Button>
            </Link>
          ) : (
            <Button className="btn-block" onClick={props.handleStartCapture}>
              Start Recording
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
