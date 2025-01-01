import React, { useState, useEffect } from "react";
import { getFiles } from "../services/filesService";

function FetchFiles() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getFiles()
      .then((result) => {
        setFiles(result.data);
      })
      .catch((err) => {
        console.error("Error fetching files:", err);
      });
  }, []);

  return (
    <div className="container mt-5 pt-3">
      <h2 className="text-center text-primary mb-4">Uploaded Files</h2>
      {files.length === 0 ? (
        <div className="alert alert-warning text-center">
          No files found.
        </div>
      ) : (
        <div className="row g-3">
          {files.map((file) => (
            <div className="col-md-6 col-lg-4" key={file.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center text-decoration-underline">
                    {file.title}
                  </h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="img-fluid rounded w-100 h-100 object-fit-cover"
                      src={`http://localhost:8080${file.imageUrl}`}
                      alt={file.title}
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                  <div className="ratio ratio-16x9 mt-3">
                    <video className="w-100" controls>
                      <source
                        src={`http://localhost:8080${file.videoUrl}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchFiles;
