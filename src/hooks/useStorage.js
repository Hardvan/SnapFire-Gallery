import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    // Upload the file
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // Progress (snap is a snapshot of the file)
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        // Error
        setError(err);
      },
      async () => {
        // Get the url
        const url = await storageRef.getDownloadURL();

        // Add the url to the collection
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });

        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
