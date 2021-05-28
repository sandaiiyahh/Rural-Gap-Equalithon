import React, { useState, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Permissions from './components/Permissions';
import MediaSelect from './components/MediaSelect';
import Record from './components/Record';
import Audio from './components/Audio';
import Finalize from './components/Finalize';
import { UPLOAD_URL } from './api';
//import './App.css';

function App() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedMedia, setRecordedMedia] = useState([]);
  const [participantId, setParticpantId] = useState(111);
  const [termsAccepted, setTermsAcceptance] = useState(false);
  const [mediaType, setMediaType] = useState('A');
  const [mediaURL, setMediaURL] = useState('');

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedMedia((prev) => prev.concat(data));
        console.log(recordedMedia.length);
      }
    },
    [setRecordedMedia, recordedMedia]
  );

  const handleStartCaptureClick = useCallback(() => {
    setRecordedMedia([]);
    setCapturing(true);

    if (mediaType === 'V') {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm',
      });

      mediaRecorderRef.current.addEventListener(
        'dataavailable',
        handleDataAvailable
      );

      mediaRecorderRef.current.start();
    } else if (mediaType === 'A') {
      const constraints = { video: false, audio: true };

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: 'audio/webm',
        });

        mediaRecorderRef.current.addEventListener(
          'dataavailable',
          handleDataAvailable
        );

        mediaRecorderRef.current.start();
      });
    }
  }, [
    mediaType,
    webcamRef,
    setCapturing,
    mediaRecorderRef,
    handleDataAvailable,
    setRecordedMedia,
  ]);

  const createPreviewURL = useCallback(() => {
    console.log('in createPreviewURL method');
    if (recordedMedia.length) {
      const mediaConfig = {};

      if (mediaType === 'A') {
        mediaConfig.type = 'audio/webm';
      }

      if (mediaType === 'V') {
        mediaConfig.type = 'video/webm';
      }

      let blob = new Blob(recordedMedia, mediaConfig);
      const url = URL.createObjectURL(blob);
      setMediaURL(url);
    }
  }, [recordedMedia, mediaType, setMediaURL]);

  const handleStopCaptureClick = React.useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setCapturing(false);
    createPreviewURL();
  }, [mediaRecorderRef, setCapturing, createPreviewURL]);

  const handleUpload = React.useCallback(() => {
    if (recordedMedia.length) {
      const mediaConfig = {};

      if (mediaType === 'A') {
        mediaConfig.type = 'audio/webm';
      }

      if (mediaType === 'V') {
        mediaConfig.type = 'video/webm';
      }

      let blob = new Blob(recordedMedia, mediaConfig);

      const formData = new FormData();

      formData.append('participant_id', participantId);
      formData.append('terms_accepted', termsAccepted);
      formData.append('media_type', mediaType);
      formData.append('media_file', blob);

      fetch(UPLOAD_URL, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          //'Content-Type': 'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
          setRecordedMedia([]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [participantId, termsAccepted, mediaType, recordedMedia]);

  const handleReRecord = () => {
    setRecordedMedia([]);
  };

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Permissions
                {...props}
                setParticipantId={setParticpantId}
                setTermsAcceptance={setTermsAcceptance}
              />
            )}
          />
          <Route
            path="/start"
            render={(props) => (
              <MediaSelect {...props} setMediaType={setMediaType} />
            )}
          />
          <Route
            path="/video"
            render={(props) => (
              <Record
                {...props}
                webcamRef={webcamRef}
                capturing={capturing}
                mediaType={mediaType}
                mediaURL={mediaURL}
                setCapturing={setCapturing}
                handleDataAvailable={handleDataAvailable}
                handleStartCapture={handleStartCaptureClick}
                handleStopCapture={handleStopCaptureClick}
                handleUpload={handleUpload}
              />
            )}
          />
          <Route
            path="/audio"
            render={(props) => (
              <Audio
                {...props}
                capturing={capturing}
                mediaType={mediaType}
                mediaURL={mediaURL}
                setCapturing={setCapturing}
                handleDataAvailable={handleDataAvailable}
                handleStartCapture={handleStartCaptureClick}
                handleStopCapture={handleStopCaptureClick}
                handleUpload={handleUpload}
              />
            )}
          />

          <Route
            path="/finish"
            render={(props) => (
              <Finalize
                {...props}
                mediaURL={mediaURL}
                handleReRecord={handleReRecord}
                handleUpload={handleUpload}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
