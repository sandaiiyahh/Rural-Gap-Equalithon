import React, { useState } from 'react';

function MediaSelect() {
  return (
    <div className="container">
      <p className="question">Question:</p>
      <p className="prompt">
        Lorem ipsum dolor sit amet, consectur adipicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua?
      </p>
      <div className="steps">
        <p className="number">1.</p>
        <p className="step-text">Choose the recording method.</p>

        <p className="number">2.</p>
        <p className="step-text">Click to start button to record.</p>
        <p className="number">3.</p>
        <p className="step-text">Try recording again or submit it.</p>
      </div>
      <button className="media-btn">
        <i className="bi bi-camera-video icon"></i>
        <p className="btn-text">Video Recording</p>
      </button>
      <button className="media-btn">
        <i className="bi bi-mic mic"></i>
        <p className="btn-text">Voice Recording</p>
      </button>
    </div>
  );
}

export default MediaSelect;
