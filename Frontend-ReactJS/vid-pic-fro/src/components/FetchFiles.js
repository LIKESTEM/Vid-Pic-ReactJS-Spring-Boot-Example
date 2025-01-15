import React, { useState, useEffect } from "react";
import { getFiles } from "../services/filesService";
import FileCard from "./FileCard";

function FetchFiles() {
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFiles, setFilteredFiles] = useState([]);

  useEffect(() => {
    getFiles()
      .then((result) => {
        setFiles(result.data);
        setFilteredFiles(result.data); // Initialize with all files
      })
      .catch((err) => {
        console.error("Error fetching files:", err);
      });
  }, []);

  // Update the file state when like, dislike, or subscribe is clicked
  const updateFile = (id, updates) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.map((file) =>
        file.id === id ? { ...file, ...updates } : file
      );
      setFilteredFiles(updatedFiles);  // Ensure filteredFiles also gets updated
      return updatedFiles;
    });
  };

  // Search functionality for filtering files dynamically
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = files.filter((file) =>
      file.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFiles(filtered);
  };

  return (
    <div className="container mt-5 pt-3">
      <h2 className="text-center text-primary mb-4">Uploaded Files</h2>

      {/* Search Section */}
      <div className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search files by title..."
            value={searchQuery}
            onChange={handleSearchChange}  // Dynamically updates search
          />
        </div>
      </div>

      {filteredFiles.length === 0 ? (
        <div className="alert alert-warning text-center">
          No files found.
        </div>
      ) : (
        <div className="row g-3">
          {filteredFiles.map((file) => (
            <FileCard key={file.id} file={file} onUpdate={updateFile} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchFiles;
