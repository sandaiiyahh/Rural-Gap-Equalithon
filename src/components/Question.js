import React from 'react';
import Container from 'react-bootstrap/Container';

function Question() {
  return (
    <Container className="p-5 question-container">
      <p className="question mr-5 text-center">Question</p>
      <p className="prompt mb-0 text-center">
        <span className="bold">In 30 seconds max</span>, Lorem ipsum dolor sit
        amet, consectur adipicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua?
      </p>
    </Container>
  );
}

export default Question;
