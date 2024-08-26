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
        const validateToken = async () => {
            if (token) {
                const AUTH_HEADER = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_BACKEND_HOST}/api/v1/auth/validate_token`,
                        AUTH_HEADER
                    );
                    if (response.status === 200) {
                        setIsAuthenticated(true);
                    } else {
                        handleInvalidSession('Your session has expired. Please log in again.');
                    }
                } catch (error) {
                    handleInvalidSession('Error validating token. Please log in again.');
                }
            } else {
                setIsAuthenticated(false);
            }
        };

        const handleInvalidSession = (msg: string) => {
            setIsAuthenticated(false);
            setMessage(msg);
            setOpenState(true);
            setMode("error");
            logout();
        };

        validateToken();
    }, [token, logout]);


    /*

    // Optionally render a loading spinner while checking token validity
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    */

    if (isAuthenticated === false) {
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
