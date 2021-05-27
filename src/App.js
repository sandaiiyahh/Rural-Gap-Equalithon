import React, { useState, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Permissions from './components/Permissions';
import MediaSelect from './components/MediaSelect';
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
  const [mediaType, setMediaType] = useState('V');

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedMedia((prev) => prev.concat(data));
      }
    },
    [setRecordedMedia]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm',
    });
    mediaRecorderRef.current.addEventListener(
      'dataavailable',
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleUpload = React.useCallback(() => {
    if (recordedMedia.length) {
      const mediaConfig = {};

      if (mediaType === 'A') {
        mediaConfig.type = 'audio/webm';
      }

      if (mediaType === 'V') {
        mediaConfig.type = 'video/webm';
      }

      const blob = new Blob(recordedMedia, mediaConfig);

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
            path="/record"
            render={(props) => (
              <Audio
                {...props}
                webcamRef={webcamRef}
                capturing={capturing}
                mediaType={mediaType}
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
