import React, { useContext } from "react";
import Webcam from "react-webcam";
import { WebCamContext } from "../../context/WebContext/WebContext";

export default function WebcamAudio() {
  const {
    capturingAudio,
    handleUpload,
    handleStartAudioCaptureClick,
    handleStopAudioCaptureClick,
    recordedChunks,
    audioChunks,
    audioURL,
  } = useContext(WebCamContext);

//   const handleStartCaptureCli = () => {
//     handleStartCaptureClick();
//     capture();
//   };

  return (
    <div className="Container">
      <div className="start-stop-box flex">
        
        {/* {capturingAudio ? (
          <button className="audio-btn" onClick={handleStopAudioCaptureClick}>
            Stop Audio
          </button>
        ) : (
          <button className="audio-btn" onClick={handleStartAudioCaptureClick}>
            Start Audio
          </button>
        )} */}

        {/* {(recordedChunks.length > 0 || audioChunks.length > 0) && (
          <>
            <button className="upload-btn" onClick={handleUpload}>
              Upload
            </button>
          </>
        )} */}

        {audioURL && (
          <div>
            <audio src={audioURL} controls />
          </div>
        )}
      </div>
    </div>
  );
}
