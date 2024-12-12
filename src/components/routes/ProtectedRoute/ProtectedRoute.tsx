'use client';

// import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
// import {useAuth} from "@/providers/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    // const { isAuthenticated } = useAuth();

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         redirect('/');
    //     }
    // }, [isAuthenticated]);

    // if (!isAuthenticated) redirect('/');

    return <>{children}</>;
};

export default ProtectedRoute;
