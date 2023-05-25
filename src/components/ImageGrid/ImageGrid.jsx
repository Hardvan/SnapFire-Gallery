import React from "react";
import "./ImageGrid.css";
import { motion } from "framer-motion";
import useFirestore from "../../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)} // For Modal
            whileHover={{ opacity: 1 }}
            layout // Animate the position of the image
          >
            <motion.img
              src={doc.url}
              alt="original"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
