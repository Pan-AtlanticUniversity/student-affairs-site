import React, { ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../context/authContext';
import Message from './Message';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { token, logout } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [message, setMessage] = useState<string>('');
    const [openState, setOpenState] = useState(false);
    const [mode, setMode] = useState("");


    useEffect(() => {
        (async () => {
            if (token) {
                const AUTH_HEADER = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                try {
                    const response = await axios.post(
                        `http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}/api/v1/auth/validate-token`, AUTH_HEADER
                    );

                    if (response.status === 200) {
                        setIsAuthenticated(true);
                    } else {
                        setIsAuthenticated(false);
                        setMessage('Your session has expired. Please log in again.');
                        setOpenState(true);
                        setMode("error");
                        logout();
                    }
                } catch (error) {
                    setIsAuthenticated(false);
                    setMessage('Error validating token. Please log in again.');
                    setOpenState(true);
                    setMode("error");
                    logout();
                }
            } else {
                setIsAuthenticated(false);
            }
        })();
    }, [token, logout]);

    /* Add animation on loading 

    if (isAuthenticated === null) {
        // Optionally render a loading spinner while checking token validity
        return <div>Loading...</div>;
    }
    */

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {children}
            <Message message={message} openState={openState} setOpenState={setOpenState} mode={mode} />
        </>
    )
};

export default ProtectedRoute;
