import React from 'react';
import Container from 'react-bootstrap/Container';

function Question(props) {
  return (
    <Container
      className={`${
        props.className ? props.className : ''
      } p-3 question-container`}
    >
      <p className="question text-center mr-md-4">Question</p>
      <p className="prompt mb-0 text-center">
        <span className="bold">In around 60 seconds</span>, what are your
        feelings after this conversation? Is there anything you'll do
        differently now after having this discussion?
      </p>
    </Container>
  );
}

export default Question;
