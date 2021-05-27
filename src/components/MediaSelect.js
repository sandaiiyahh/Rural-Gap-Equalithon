import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function MediaSelect() {
  return (
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
      <Button className="media-btn">
        <i className="bi bi-camera-video icon"></i>
        <p className="btn-text">Video Recording</p>
      </Button>
      <Button className="media-btn">
        <i className="bi bi-mic mic"></i>
        <p className="btn-text">Voice Recording</p>
      </Button>
    </div>
  );
}

export default MediaSelect;
