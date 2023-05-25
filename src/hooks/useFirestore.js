import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // onSnapshot is a listener that listens to any changes in the collection
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc") // Descending order
      .onSnapshot((snap) => {
        // Storing the documents in an array
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        // Removing the documents with duplicate urls
        documents = documents.filter(
          (doc, index, self) =>
            index === self.findIndex((t) => t.url === doc.url)
        );

        setDocs(documents);
      });

    // Cleanup function
    return () => unsub(); // Unsubscribe from the collection when we no longer use it
  }, [collection]);

  return { docs };
};

export default useFirestore;
