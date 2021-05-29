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
        <div className="row text-align-center mb-5">
          <div className="col-10 col-sm-4 d-flex">
            <div className="num-circle">1</div>
            <p className="step-text">Choose the recording method.</p>
          </div>

          <div className="col-10 col-sm-4 d-flex">
            <div className="num-circle">2</div>
            <p className="step-text">Click to start button to record.</p>
          </div>

          <div className="col-10 col-sm-4 d-flex">
            <div className="num-circle">3</div>
            <p className="step-text">Try recording again or submit it.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <Link to="/video">
              <Button
                className="btn-block media-btn"
                onClick={() => props.setMediaType('V')}
              >
                <div className="d-flex justify-content-center">
                  <i className="bi bi-camera-video icon"></i>
                  <p className="btn-text">Video Recording</p>
                </div>
              </Button>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link to="/audio">
              <Button
                className="btn-block media-btn"
                id="voice"
                onClick={() => props.setMediaType('A')}
              >
                <div className="d-flex justify-content-center">
                  <i className="bi bi-mic mic icon"></i>
                  <p className="btn-text">Voice Recording</p>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MediaSelect;
