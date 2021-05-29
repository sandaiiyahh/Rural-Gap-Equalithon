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
        {/* device width */}
        <div className="col-12 col-md-7">
          <Webcam className="video-width" audio={true} ref={props.webcamRef} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4">
          {props.capturing ? (
            <Link to="/finish">
              <Button
                className="btn-block media-btn p-2 stop-btn"
                onClick={props.handleStopCapture}
              >
                <div className="d-flex justify-content-center">
                  <i class="bi bi-stop-circle-fill stop-icon"></i>
                  <p className="btn-text align-self-center">Stop Recording</p>
                </div>
              </Button>
            </Link>
          ) : (
            <Button
              className="btn-block media-btn p-0"
              onClick={props.handleStartCapture}
            >
              <div className="d-flex justify-content-center">
                <i class="bi bi-record2 record-icon"></i>
                <p className="btn-text align-self-center">Start Recording</p>
              </div>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
