import React, { useContext } from "react";
import Webcam from "react-webcam";
import { WebCamContext } from "../../context/WebContext/WebContext";

export default function WebcamVideo() {
  const {
    img,
    webcamRef,
    setCapturingVideo,
    capturingVideo,
    paused,
    capture,
    handleStartCaptureClick,
    handleStopCaptureClick,
    handlePauseCaptureClick,
    handleResumeCaptureClick,
    handleUpload,
    handleDownload,
    videoConstraints,
    recordedChunks,
    timer,
    setImg,
    videoURL,
  } = useContext(WebCamContext);

  const handleStartCaptureCli = () => {
    handleStartCaptureClick();
    capture();
  };
  return (
    <div className="Container">
      <div className="start-stop-box flex">
        <>
        {!videoURL ? <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
:
          (
            <div>
              <video
                src={videoURL}
                controls
                style={{ width: "303px", height: "303px" , borderRadius:"0px" }}
              />
            </div>
          )}
        </>

        {capturingVideo ? (
          <>
            <button className="video-btn " onClick={handleStopCaptureClick}>
              Stop Capture
            </button>
            {paused ? (
              <button className="video-btn" onClick={handleResumeCaptureClick}>
                Resume Capture
              </button>
            ) : (
              <button className="video-btn" onClick={handlePauseCaptureClick}>
                Pause Capture
              </button>
            )}
          </>
        ) : (
          <button className="video-btn" onClick={handleStartCaptureCli}>
            Start Capture
          </button>
        )}
        {recordedChunks.length > 0 && (<>
          {/* <button className="video-btn" onClick={handleDownload}>
            Download
          </button> */}
          <button className="video-btn" onClick={handleUpload}>
            Upload
          </button>
          </>
        )}
      </div>
    </div>
  );
}
