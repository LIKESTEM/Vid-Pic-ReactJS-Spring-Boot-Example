import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
    const [message, setMessage] = useState('');

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:8080//api/auth/logout', {}, { withCredentials: true });
            setMessage(response.data); // Will show "Logout successful!"
        } catch (error) {
            console.error('Error logging out', error);
            setMessage('Logout failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Logout</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Logout;
