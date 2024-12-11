import React, { useState, useEffect } from "react";
import './FetchFiles.css';
import { getFiles } from "../services/filesService";

function FetchFiles() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch metadata from backend
    // const fetchFiles = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:8080/api/files");
    //     setFiles(response.data);
    //   } catch (error) {
    //     console.error("Error fetching files:", error);
    //   }
    // };

    // fetchFiles();

    getFiles()
      .then((result) => {
        setFiles(result.data)
      })
      .catch(err => {
        console.error("Error fetching files:", err);
      });

  }, []);

  return (
    <div className="App mt-5 pt-3">
      <h2 className="text-center">Uploaded Files</h2>
      {files.length === 0 ? (
        <p className="text-center">No files found.</p>
      ) : (
        <div>
          {files.map((file) => (
            <div className="mb-4" key={file.id}>
              <h3 className="text-center text-decoration-underline fw-normal pb-3">{file.title}</h3>
              <div className="text-center py-2 ">
                <img
                  className="img-fluid d-block mx-auto w-50 w-md-75 w-sm-100"
                  src={`http://localhost:8080${file.imageUrl}`}
                  alt={file.title}
                />
              </div>
              <br />
              <div className="ratio ratio-16x9 mx-auto w-50 w-md-75 w-sm-100">
                <video className="w-100" controls>
                  <source
                    src={`http://localhost:8080${file.videoUrl}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchFiles;
