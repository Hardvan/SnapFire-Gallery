import React from "react";
import "./Modal.css";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    // If the user clicks on the backdrop (not the image), then close the modal
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImage} alt="enlarged" />
    </div>
  );
};

export default Modal;
