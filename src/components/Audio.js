import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { ReactMic } from 'react-mic';
import Question from './Question';

const Audio = (props) => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Question />
        </div>
      </div>
      <div className="row justify-content-center mb-2">
        <div className="col-7">
          <ReactMic
            record={props.capturing}
            className="sound-wave"
            onStop={() => console.log('stopped recording')}
            onData={(data) => props.handleDataAvailable}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          {props.capturing ? (
            <Button className="btn-block" onClick={props.handleStopCapture}>
              Stop Recording
            </Button>
          ) : (
            <Button className="btn-block" onClick={props.handleStartCapture}>
              Start Recording
            </Button>
          )}
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-4">
          <Link to="/finish">
            <Button className="btn-block" onClick={props.handleUpload}>
              Test Submission
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Audio;
