import React, { useState } from "react";
import "./UploadForm.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    // console.log(selected);

    const types = ["image/png", "image/jpeg", "image/jpg"];

    // File selected & valid type
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file (png/jpeg/jpg)");
    }
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;

    if (enteredPassword === "thisisaverysecretpassword") {
      setAuthenticated(true);
      setError(null);
    } else {
      setAuthenticated(false);
      setError("Incorrect password");
    }

    setPassword(enteredPassword);
  };

  return (
    <form>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {/* If authenticated, show upload form */}
      {authenticated && (
        <label className="plus-label">
          <input
            className="plus-input"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <span className="plus-span">+</span>
        </label>
      )}
      <div className="output">
        {authenticated ? (
          <>
            {/* If no file selected */}
            {error && <div className="error">{error}</div>}
            {/* If file selected */}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </>
        ) : (
          <div className="error">{error}</div>
        )}
      </div>
    </form>
  );
};

export default UploadForm;
