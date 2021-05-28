import React from 'react';
import Container from 'react-bootstrap/Container';

function Question(props) {
  return (
    <Container className="p-5">
      <p className="question">Question:</p>
      <p className="prompt">
        Lorem ipsum dolor sit amet, consectur adipicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua?
      </p>
    </Container>
  );
}

export default Question;