import { Navigate } from 'react-router-dom';
import useAuth from '../context/authContext';
import { ReactNode } from 'react';

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};


export default ProtectedRoute;


