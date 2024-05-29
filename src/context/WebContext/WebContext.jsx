import React, { createContext, useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
// import axios from 'axios'; // Make sure you have axios installed

export const WebCamContext = createContext();

export const WebCamProvider = ({ children }) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioRecorderRef = useRef(null);
  const [img, setImg] = useState(null);
  const [capturingVideo, setCapturingVideo] = useState(false);
  const [capturingAudio, setCapturingAudio] = useState(false);
  const [paused, setPaused] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [audioChunks, setAudioChunks] = useState([]);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  const [videoURL, setVideoURL] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleAudioDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setAudioChunks((prev) => prev.concat(data));
      }
    },
    [setAudioChunks]
  );

  useEffect(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      setVideoURL(URL.createObjectURL(blob));
    }
  }, [recordedChunks]);

  useEffect(() => {
    if (audioChunks.length) {
      const blob = new Blob(audioChunks, { type: "audio/webm" });
      setAudioURL(URL.createObjectURL(blob));
    }
  }, [audioChunks]);


  const handleStartCaptureClick = useCallback(() => {
    startTimer();
    setCapturingVideo(true);
    setVideoURL(null);
    setPaused(false);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [ handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturingVideo(false);
    setPaused(false);
    stopTimer();
  }, []);

  const handlePauseCaptureClick = useCallback(() => {
    mediaRecorderRef.current.pause();
    setPaused(true);
  }, []);

  const handleResumeCaptureClick = useCallback(() => {
    mediaRecorderRef.current.resume();
    setPaused(false);
  }, []);

  const handleUpload = useCallback(async () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const formData = new FormData();
      formData.append("video", blob, "recorded_video.webm");

      // try {
      //   const response = await axios.post("YOUR_UPLOAD_ENDPOINT", formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   });
      //   console.log("File uploaded successfully", response.data);
      // } catch (error) {
      //   console.error("Error uploading file", error);
      // }
      setRecordedChunks([])
      
    }

    if (audioChunks.length) {
      const blob = new Blob(audioChunks, {
        type: "audio/webm",
      });
      const formData = new FormData();
      formData.append("audio", blob, "recorded_audio.webm");

      // try {
      //   const response = await axios.post("YOUR_UPLOAD_ENDPOINT", formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   });
      //   console.log("File uploaded successfully", response.data);
      // } catch (error) {
      //   console.error("Error uploading file", error);
      // }
      setAudioChunks([])
    }
  }, [recordedChunks, audioChunks]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, []);

  const handleStartAudioCaptureClick = useCallback(async () => {
    startTimer();
    setCapturingAudio(true);
    setAudioURL(null);
    setPaused(false);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioRecorderRef.current = new MediaRecorder(stream, {
      mimeType: "audio/webm",
    });
    audioRecorderRef.current.addEventListener(
      "dataavailable",
      handleAudioDataAvailable
    );
    audioRecorderRef.current.start();
  
  }, [handleAudioDataAvailable]);

  const handleStopAudioCaptureClick = useCallback(() => {
    audioRecorderRef.current.stop();
    setCapturingAudio(false);
    stopTimer();
  }, []);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
  };

  return (
    <WebCamContext.Provider
      value={{
        setImg,
        videoURL,
        audioURL,
        webcamRef,
        img,
        capturingVideo,
        capturingAudio,
        paused,
        recordedChunks,
        audioChunks,
        capture,
        handleStartCaptureClick,
        handleStopCaptureClick,
        handlePauseCaptureClick,
        handleResumeCaptureClick,
        handleUpload,
        handleStartAudioCaptureClick,
        handleStopAudioCaptureClick,
        videoConstraints,
        timer,stopTimer,setVideoURL ,setAudioURL
      }}
    >
      {children}
    </WebCamContext.Provider>
  );
};
