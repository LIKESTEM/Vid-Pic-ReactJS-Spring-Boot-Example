import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
    }
);

const registerUser = ({
    username,
    password,
    email,
    contactNumber,
    role,
  }
) => api.post("http://localhost:8080/api/auth/register", {
    username,
    password,
    email,
    contactNumber,
    role,
  }
);

const login = ({
    username,
    password,
  }
) => api.post("http://localhost:8080/api/auth/login", {
    username,
    password,
  }
);

const verifyMfa = ({
    username,
    mfaToken,
  }
) => api.post("http://localhost:8080/api/auth/verify-mfa", {
    username,
    mfaToken,
  }
);

const resetPassword = ({ 
    token, 
    newPassword 
    }
) => api.post("http://localhost:8080/api/auth/reset-password", { 
        token, 
        newPassword 
    }
);

const forgotPassword = (
    { email }
) => api.post("http://localhost:8080/api/auth/forgot-password", {email});


export { registerUser, login, verifyMfa, resetPassword, forgotPassword };
