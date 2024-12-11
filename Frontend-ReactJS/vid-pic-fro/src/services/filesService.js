import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

// Function to get all files
const getFiles = () => api.get("/api/files");

// create/upload new files
const createFiles = (formData) => api.post(
    "api/files/upload", 
    formData,
    {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }
);

export { getFiles, createFiles };

