import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Finalize = (props) => {
  console.log(props.mediaURL);
  return (
    <Container className="p-5 text-center">
      <h1 className="review-title">Review Recording</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-4 col-md-2 mt-3">
          <Button>Try Again</Button>
        </div>
        <div className="col-4 col-md-2 mt-3">
          <Button>Submit</Button>
        </div>
      </div>
    </Container>
  );
};

export default Finalize;
