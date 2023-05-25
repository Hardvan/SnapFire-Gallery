import React from "react";
import "./ImageGrid.css";
import useFirestore from "../../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)} // For Modal
          >
            <img src={doc.url} alt="original" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
