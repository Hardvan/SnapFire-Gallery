import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    // If the user clicks on the backdrop (not the image), then close the modal
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="enlarged"
        initial={{ y: "-10vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
