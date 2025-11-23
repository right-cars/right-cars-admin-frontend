'use client';

import { redirect } from 'next/navigation';
import {useAuth} from "@/providers/AuthContext";
import { ReactNode } from 'react';

const PublicRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAuth();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         router.push('/dashboard'); // Redirect authenticated users
    //     }
    // }, [isAuthenticated, router]);

    if (isAuthenticated) redirect("/vehicles"); // Optionally render a loader while redirecting

    return <>{children}</>;
};

export default PublicRoute;
