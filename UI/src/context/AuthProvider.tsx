import React, { createContext, useState, ReactNode, useMemo, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { decode, JwtPart } from 'jwt-js-decode';
import CustomLoader from '../components/CustomLoader';

const baseUrl = `${import.meta.env.VITE_BACKEND_HOST as string}/api/v1`

const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true, // ensures cookies are sent
    headers: {
        'Content-Type': 'application/json',
    }
});

interface UserJWT extends JwtPart {
    email: string;
}

interface AuthContextType {
    user: UserJWT | null;
    token: string | null;
    isTokenValid: () => Promise<boolean>;
    forgotPassword: (email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    login: (email: string, password: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    register: (firstName: string, lastName: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    logout: () => void;
    updateAccessToken: (token: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState<UserJWT | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const isTokenValid = useCallback(async () => {
        if (!token) return false;

        try {
            const res = await axiosInstance.post('/users/validate_token', {
                token
            });
            return res.data.valid;
        } catch (error) {
            console.error('Error validating token:', error);
            return false;
        }
    }, [token]);

    const login = useCallback(async (email: string, password: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axiosInstance.post('/auth/login', { email, password }
            );
            setMessage(response.data.message);
            setMode("success");
            const { token } = response.data;
            setToken(token);
            const jwt = decode(token) as unknown as UserJWT;
            setUser(jwt.payload);
            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data.message);
                setMode("error");
            } else {
                setMessage('Login failed');
                setMode("error");
            }
        }
        setOpenState(true);
    }, [navigate]);

    const updateAccessToken = useCallback(async (newToken: string) => {
        try {
            setToken(newToken);
            const jwt = decode(newToken) as unknown as UserJWT;
            setUser(jwt.payload);
        } catch (error) {
            console.error('Token update error:', error);
            throw error;
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setToken(null);
        document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        navigate("/login", { replace: true });
    }, [navigate]);

    const register = useCallback(async (firstName: string, lastName: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axiosInstance.post('/auth/register', {
                fullname: `${firstName} ${lastName}`,
                email: email,
            });

            setMessage(response.data.message);
            setMode("success");
            const { token } = response.data;
            setToken(token);
            const jwt = decode(token) as unknown as UserJWT;
            setUser(jwt.payload);
            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data.message);
                setMode("error");
            } else {
                setMessage('Registration failed');
                setMode("error");
            }
        }
        setOpenState(true);
    }, [navigate]);

    const forgotPassword = useCallback(async (email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axiosInstance.post('/auth/forgot_password', { email });
            setMessage(response.data.message);
            setMode("success");
            setOpenState(true);
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data.message);
                setMode("error");
            } else {
                setMessage('Password update failed');
                setMode("error");
            }
            setOpenState(true);
        }
    }, [navigate]);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                /*
                const res = await axiosInstance.get('/auth/refresh_session');

                console.log(res)
                if (res.data.accessToken) {
                    await updateAccessToken(res.data.accessToken);
                }
                    */
            } catch (error) {
                console.log('App loaded');
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, [updateAccessToken]);



    const value = useMemo(
        () => ({
            user,
            token,
            login,
            forgotPassword,
            register,
            logout,
            isTokenValid,
            updateAccessToken
        }),
        [forgotPassword, isTokenValid, login, logout, register, token, updateAccessToken, user]
    );

    if (loading) {
        return <CustomLoader />;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
