import React, { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface AuthContextType {
    user: string | null
    token: string | null;
    login: (email: string, password: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<string>>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    register: (firstName: string, lastName: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<string>>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        setToken(localStorage.getItem('token') ?? null);
        setUser(localStorage.getItem('user') ?? null);
    }, []);

    const login = async (email: string, password: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<string>>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axios.post(`http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}/api/v1/auth/login`, { email, password });
            setMessage(response.data.message)
            setMode("success");

            const { token, user } = response.data;
            setToken(token);
            setUser(user);
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data.message)
                setMode("error");
            } else {
                setMessage('Login failed');
                setMode("error");
            }
        }
        setOpenState(true);
    };

    const register = async (firstName: string, lastName: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<string>>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axios.post(`http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}/api/v1/auth/register`, {
                fullname: `${firstName} ${lastName}`,
                email: email,
            });
            setMessage(response.data.message)
            setMode("success");

            const { token } = response.data;
            setToken(token);
            setUser(firstName);
            localStorage.setItem('token', token);
            localStorage.setItem('user', firstName);
            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data.message)
                setMode("error");
            } else {
                setMessage('Registration failed');
                setMode("error");
            }
        }
        setOpenState(true);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            token,
            login,
            register,
            logout
        }),
        [user]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
