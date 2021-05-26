import React, { useState } from 'react';

function MediaSelect() {
  return (
    <div class="container">
      <p class="question">Question:</p>
      <p class="prompt">
        Lorem ipsum dolor sit amet, consectur adipicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua?
      </p>
      <div class="steps">
        <p class="number">1.</p>
        <p class="step-text">Choose the recording method.</p>

        <p class="number">2.</p>
        <p class="step-text">Click to start button to record.</p>
        <p class="number">3.</p>
        <p class="step-text">Try recording again or submit it.</p>
      </div>
      <button>Video Recording</button>
      <button>Voice Recording</button>
    </div>
  );
}

export default MediaSelect;
