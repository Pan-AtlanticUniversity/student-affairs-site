import React, { ReactNode, useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../context/authContext';
import Message from './Message';
import CustomLoader from './CustomLoader';

const baseUrl = `${import.meta.env.VITE_BACKEND_HOST as string}api/v1`


interface ProtectedRouteProps {
    children: ReactNode;
    role?: string;
}

const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user, token, isTokenValid, updateAccessToken } = useAuth();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [openState, setOpenState] = useState(false);
    const [mode, setMode] = useState<"success" | "error" | "warning" | "info">("success");

    const handleInvalidSession = (msg: string) => {
        setMessage(msg);
        setOpenState(true);
        setShouldNavigate(true);
        setMode("error");
    };

    useEffect(() => {
        const validateSession = async () => {
            try {
                if (!token) {
                    setShouldNavigate(true);
                    return;
                }

                const isValid = await isTokenValid();
                if (!isValid) {
                    // Try to refresh the token
                    const res = await axiosInstance.get('/auth/refresh_session');
                    console.log(res)
                    if (res.data.accessToken) {
                        await updateAccessToken(res.data.accessToken);
                    } else {
                        setShouldNavigate(true);
                        handleInvalidSession('Your session has expired. Please log in again.');
                    }
                }
            } catch (error) {
                handleInvalidSession('An error occured, please try again');
                setShouldNavigate(true);
            } finally {
                setLoading(false);
            }
        };

        validateSession();
    }, [token, location.pathname, isTokenValid, updateAccessToken]);

    if (loading) {
        return <CustomLoader />
    }

    if (!user || !token || shouldNavigate) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <>
            {children}
            <Message message={message} openState={openState} setOpenState={setOpenState} mode={mode} />
        </>
    )
};

export default ProtectedRoute;


