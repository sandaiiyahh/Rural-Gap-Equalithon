import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Question from './Question';

function MediaSelect(props) {
  return (
    <Container>
      <Question />
      <div>
        <div className="row text-align-center steps">
          <div className="col-10 col-sm-4">
            <p className="number">1.</p>
            <p className="step-text">Choose the recording method.</p>
          </div>

          <div className="col-10 col-sm-4">
            <p className="number">2.</p>
            <p className="step-text">Click to start button to record.</p>
          </div>

          <div className="col-10 col-sm-4">
            <p className="number">3.</p>
            <p className="step-text">Try recording again or submit it.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <Link to="/record">
              <Button
                className="media-btn"
                onClick={() => props.setMediaType('V')}
              >
                <i className="bi bi-camera-video icon"></i>
                <p className="btn-text">Video Recording</p>
              </Button>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link to="/audio">
              <Button
                className="media-btn"
                onClick={() => props.setMediaType('A')}
              >
                <i className="bi bi-mic mic"></i>
                <p className="btn-text">Voice Recording</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MediaSelect;
