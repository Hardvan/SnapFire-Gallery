import React, { useState } from "react";
import "./UploadForm.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    // console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file (png/jpeg/jpg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" accept="image/*" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {/* If no file selected */}
        {error && <div className="error">{error}</div>}
        {/* If file selected */}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
