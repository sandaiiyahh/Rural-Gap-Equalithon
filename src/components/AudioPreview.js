import React from 'react';

const AudioPreview = (props) => {
  return <div>{props.audioURL && <audio src={props.audioURL} controls />}</div>;
};

export default AudioPreview;
