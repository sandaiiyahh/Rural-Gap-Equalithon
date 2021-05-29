import React from 'react';
import Container from 'react-bootstrap/Container';

function Question(props) {
  console.log('props -->', props);
  return (
    <Container
      className={`${
        props.className ? props.className : ''
      } p-3 question-container`}
    >
      <p className="question text-center mr-md-4">Question</p>
      <p className="prompt mb-0 text-center">
        <span className="bold">In 30 seconds max</span>, Lorem ipsum dolor sit
        amet, consectur adipicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua?
      </p>
    </Container>
  );
}

export default Question;
