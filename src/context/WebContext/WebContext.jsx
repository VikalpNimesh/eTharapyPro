import React, { createContext, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

export const WebCamContext = createContext();

export const WebCamProvider = ({ children }) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [img, setImg] = useState(null);
  const [capturing, setCapturing] = useState(false);
  const [paused, setPaused] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    setPaused(false);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    setPaused(false);
  }, []);

  const handlePauseCaptureClick = useCallback(() => {
    mediaRecorderRef.current.pause();
    setPaused(true);
  }, []);

  const handleResumeCaptureClick = useCallback(() => {
    mediaRecorderRef.current.resume();
    setPaused(false);
  }, []);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, []);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  return (
    <WebCamContext.Provider
      value={{
        setImg,
        webcamRef,
        img,
        capturing,
        paused,
        recordedChunks,
        capture,
        handleStartCaptureClick,
        handleStopCaptureClick,
        handlePauseCaptureClick,
        handleResumeCaptureClick,
        handleDownload,
        videoConstraints,
      }}
    >
      {children}
    </WebCamContext.Provider>
  );
};
