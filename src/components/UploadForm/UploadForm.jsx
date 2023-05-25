import React, { useState } from "react";
import "./UploadForm.css";

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
      <input type="file" accept="image/*" onChange={handleChange} />
      <div className="output">
        {/* If no file selected */}
        {error && <div className="error">{error}</div>}
        {/* If file selected */}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
