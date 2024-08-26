import React, { createContext, useState, ReactNode, useMemo, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export interface AuthContextType {
    user: string | null;
    token: string | null;
    forgotPassword: (email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    login: (email: string, password: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    register: (firstName: string, lastName: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    logout: () => void;
}

interface JwtPayload {
    name: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode<JwtPayload>(token);
                setUser(decodedToken.name);
            } catch (error) {
                navigate("/login", { replace: true });
                setUser(null);
            }
        } else {
            setUser(null);
        }
    }, [token]);

    const login = async (email: string, password: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/auth/login`, { email, password });
            setMessage(response.data.message);
            setMode("success");

            const { token } = response.data;
            const decodedToken = jwtDecode<JwtPayload>(token);
            setToken(token);
            setUser(decodedToken.name);
            localStorage.setItem('token', token);
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
    };

    const forgotPassword = async (email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/auth/forgot_password`, { email });
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
    };

    const register = async (firstName: string, lastName: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string | null>>, setMode: React.Dispatch<React.SetStateAction<"success" | "error" | "warning" | "info">>, setOpenState: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/auth/register`, {
                fullname: `${firstName} ${lastName}`,
                email: email,
            });

            setMessage(response.data.message);
            setMode("success");

            const { token } = response.data;
            setToken(token);
            setUser(firstName);
            localStorage.setItem('token', token);
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
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        navigate("/login", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            token,
            login,
            forgotPassword,
            register,
            logout
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
