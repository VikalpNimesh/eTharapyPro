import  {  useContext } from "react";
import Webcam from "react-webcam";
import { WebCamContext } from "../../context/WebContext/WebContext";

export default function WebcamVideo() {
    const {
        img,
        webcamRef,
        capturing,
        paused,
        capture,
        handleStartCaptureClick,
        handleStopCaptureClick,
        handlePauseCaptureClick,
        handleResumeCaptureClick,
        handleDownload,
        videoConstraints,
        recordedChunks,
        setImg
      } = useContext(WebCamContext);
  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
      {capturing ? (
        <>
          <button className="video-btn" onClick={handleStopCaptureClick}>Stop Capture</button>
          {paused ? (
            <button className="video-btn" onClick={handleResumeCaptureClick}>Resume Capture</button>
          ) : (
            <button className="video-btn" onClick={handlePauseCaptureClick}>Pause Capture</button>
          )}
        </>
      ) : (
        <button className="video-btn" onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
    </div>
  );
}
