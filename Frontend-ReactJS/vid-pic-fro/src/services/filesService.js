import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true, // ✅ Ensure credentials are sent for authentication
});

// Get all files
const getFiles = () => api.get("/api/files");

// Upload files (with proper headers)
const createFiles = (formData) => api.post(
    "/api/files/upload",
    formData,
    {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
);

export { getFiles, createFiles };
