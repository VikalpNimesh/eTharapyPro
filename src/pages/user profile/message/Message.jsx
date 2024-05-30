import React, { useContext, useEffect, useRef, useState } from "react";
import "./Message.css";
import FileUploader from "../../../components/file uploader/FileUploader";
import WebcamVideo from "../../../components/webcam/WebCamVideo";
import { WebCamContext } from "../../../context/WebContext/WebContext";
import WebcamAudio from "../../../components/webcam/WebCamAudio";

const Message = ({ handleToggle, sidebar }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [IsAudioRecorded, setIsAudioRecorded] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [first, setFirst] = useState("");
  const [timerPaused, setTimerPaused] = useState(false);
  const intervalRef = useRef(null);
  const textareaRef = useRef(null);
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight - 5}px`;
    if (textarea.scrollHeight >= 300) {
      textarea.style.overflow = "auto";
    } else {
      textarea.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    adjustHeight();
    textarea.addEventListener("input", adjustHeight);
    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, []);

  const {
    img,
    webcamRef,
    capturingVideo,
    paused,
    capture,
    handleStartCaptureClick,
    handleStopCaptureClick,
    handlePauseCaptureClick,
    handleResumeCaptureClick,
    handleStartAudioCaptureClick,
    handleStopAudioCaptureClick,
    handleDownload,
    videoConstraints,
    recordedChunks,
    audioChunks,
    setImg,
    stopTimer,
    timer,
    videoURL,
    audioURL,setVideoURL ,setAudioURL
  } = useContext(WebCamContext);

  // console.log(audioURL)
  // console.log(videoURL)
  // console.log("isCameraOpen", isCameraOpen);
  // console.log("isRecording", isRecording);


  const removeFile = () => {
    setSelectedFile(null);
  };


  const handleChange = (e) => {
    setMessage(e.target.value);
    adjustHeight();
  };

  const handleSendMessage = () => {
    setFirst(message);
    setIsSend(true);
    setMessage("");
    setSelectedFile(null)
    setIsCameraOpen(false);
    setIsRecording(false);
    setVideoURL(null)
    setAudioURL(null)
        setIsAudioRecorded(false)
  };

  const handleVideoMessage = () => {
    setIsCameraOpen(true);
    setIsRecording(true);
    setTimerPaused(false);
    // startTimer();
    // handleStartCaptureClick()
    // capture()
  };
  const handleAudioMessage = () => {
    setIsAudioRecorded(true);
    setIsRecording(true);
    setTimerPaused(false);
    // handleStartAudioCaptureClick()

  };

  const handleStopRecording = () => {
    // setIsRecording(false);
    // setIsCameraOpen(false);
    setTimerPaused(true);
    // setIsAudioRecorded(false)
    handleStopCaptureClick()
    // handleStopAudioCaptureClick()
    stopTimer();
  };

  return (
    <div className="message-main position-relative container-fluid m-0 p-0">
      <div className="message-heading d-flex justify-content-between mb-3">
        <h2 className="h32">Messages</h2>
        <div className="right d-flex align-items-center">
          <p className="d-none d-md-block">Free messages available: 3</p>
          <i
            className="fa-solid fa-video flex"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="join video session"
          ></i>
          <i
            className="fa-solid fa-bars d-md-none flex"
            onClick={() => {
              handleToggle(sidebar);
            }}
          ></i>
        </div>
      </div>

      <div className="upcoming-session mb-3">
        <i className="fa-regular fa-bell"></i>
        <p>
          Upcoming session: <span>Apr 18, 2023 11:30 AM - 12:30 AM</span>
        </p>
      </div>

      <div>
        {!selectedFile && <div className="show-input-message">{first}</div>}
        {selectedFile && (
          <div className="show-input-message d-flex justify-content-between">
            {/* <p>{selectedFile.name}</p>
            <button onClick={removeFile}>
              <span className="material-symbols-rounded">delete</span>
            </button> */}
          </div>
        )}
        <div className="message-sent-time flex">
          <img src="sdas" alt="E" className="bg-black h-100 rounded-circle" />
          <p>eTherapyPro</p>
          <small>Jan 3, 2023, 1:24 PM</small>
        </div>
      </div>

      <div className="input-message-box position-absolute bott d-flex justify-content-between align-items-end w-100">
        {!selectedFile && !isCameraOpen ? (
          <FileUploader
            removeFile={removeFile}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        ) : (
          <>
            {selectedFile ? (
              <i className="fa-solid fa-trash" onClick={removeFile}></i>
            ) : (
              <i className="fa-solid fa-trash"> </i>
            )}
          </>
        )}
 
        {!timer ? (
          <>
            {!selectedFile ? (
              <textarea
                className="w-100"
                name="message"
                rows="auto"
                placeholder="Enter text here"
                value={message}
                ref={textareaRef}
                onChange={handleChange}
                onKeyDown={adjustHeight}
                onKeyUp={adjustHeight}
                onPaste={adjustHeight}
                onCut={adjustHeight}
                style={{ overflow: "hidden" }}
              ></textarea>
            ) : (
              <div className="timer d-flex">
                <p>{selectedFile.name}</p>
                {/* <button onClick={removeFile}>
              <span className="material-symbols-rounded">delete</span>
            </button> */}
              </div>
            )}
          </>
        ) : (
          <div className="timer d-flex">
            <p><span className="red-dot"></span>{new Date(timer * 1000).toISOString().substr(11, 8)}</p>
          </div>
        )}

        {
  (selectedFile || videoURL || audioURL || message.length>0) && (
    <i
      className="fa-regular fa-paper-plane"
      onClick={handleSendMessage}
    ></i>
  )
}
        {timer == 0 && !capturingVideo  && !videoURL && !audioURL && isRecording   && (
          <i
            className="fa-solid fa-play flex"
            onClick={!IsAudioRecorded? handleStartCaptureClick : handleStartAudioCaptureClick}
          ></i>
        ) }

        {timer >  0 &&  (
          <i
            className="fa-solid fa-pause flex"
            onClick={!IsAudioRecorded ? handleStopRecording : handleStopAudioCaptureClick}
          ></i>
        )}

        {!isCameraOpen && message.length === 0 && !selectedFile && timer == 0 && !isRecording && (
          <>
            <i className="fa-solid fa-video" onClick={handleVideoMessage}></i>
            <i
              className="fa-solid fa-microphone"
              onClick={handleAudioMessage}
            ></i>
          </>
        )}
      </div>

      {isCameraOpen && <WebcamVideo />}
      {IsAudioRecorded && <WebcamAudio />}
    </div>
  );
};

export default Message;
