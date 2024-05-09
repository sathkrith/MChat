// pages/protected.tsx
'use client'
import React, { ReactNode, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

interface ProtectedProps {
    children: ReactNode;  // Define that this component accepts children
}

const Protected: React.FC<ProtectedProps> = ({ children }, redirectUrl="/login") => {
    const token = useAuth()
    const router = useRouter();
    useEffect(() => {
        if (!token.token) {
            router.push(redirectUrl);
        }
    }, [token, router, redirectUrl]);

    return token.token ? <AuthProvider>{children}</AuthProvider> :null;
};

export default Protected;