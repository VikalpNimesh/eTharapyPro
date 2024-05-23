import React, { useRef, useState } from "react";
import "./FileInput.css";

const FileInput = ({selectedFile, setSelectedFile ,removeFile}) => {
  const inputRef = useRef();


  // Handle the change event when a file is selected
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

 

  return (
    <div>
      {/* Hidden file input element */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      <i className="fa-solid fa-paperclip" onClick={onChooseFile}></i>

      
      {/* {selectedFile && (
        <div className="selected-file">
          <p>{selectedFile.name}</p>

          <button onClick={removeFile}>
            <span className="material-symbols-rounded">delete</span>
          </button>
        </div>
      )} */}
    </div>
  );
};

export default FileInput;