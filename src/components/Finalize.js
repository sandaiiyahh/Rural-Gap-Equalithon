import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom';

class Finalize extends Component {
  state = {
    show: false,
    url: '',
  };

  handleClick = () => {
    this.setState({ show: true });
    this.props.handleUpload();
  };

  createPreview = () => {
    if (this.props.recordedMedia.length) {
      const mediaConfig = {};

      if (this.props.mediaType === 'A') {
        mediaConfig.type = 'audio/webm';
      }

      if (this.props.mediaType === 'V') {
        mediaConfig.type = 'video/webm';
      }

      let blob = new Blob(this.props.recordedMedia, mediaConfig);
      console.log(blob);
      let url = URL.createObjectURL(blob);
      console.log(url);
      this.setState({ url: url });
    }
  };

  componentDidUpdate() {
    if (this.state.url.length === 0) {
      this.createPreview();
    }
  }

  handleClose = () => this.setState({ show: false });

  render() {
    console.log(this.state.url);
    return (
      <Container className="p-5 text-center">
        <h1 className="review-title">Review Recording</h1>
        <div className="row justify-content-center align-items-center">
          <div>
            {this.props.mediaType === 'V' ? (
              <video controls src={this.state.url} type="video/webm" />
            ) : (
              <audio src={this.state.url} controls />
            )}
          </div>
          <div className="col-4 col-md-2 mt-3">
            {this.props.mediaType === 'V' ? (
              <Link to="/video">
                <Button>Try Again</Button>
              </Link>
            ) : (
              <Link to="/audio">
                <Button>Try Again</Button>
              </Link>
            )}
          </div>
          <div className="col-4 col-md-2 mt-3">
            <Button onClick={this.handleClick}>Submit</Button>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Thank you. Your recording was successfully submitted.
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Link to="/">
              <Button>Go Back To Home</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Finalize;
