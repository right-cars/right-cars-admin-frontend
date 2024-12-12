'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    role: string;
    login: (userRole: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(()=> {
        if(typeof window !== "undefined") {
            return Boolean(localStorage.getItem("admin"))
        };
        return false;
    });
    const [role, setRole] = useState('');

    const login = (userRole: string) => {
        setIsAuthenticated(true);
        setRole(userRole);
        if (typeof window !== "undefined") {
            localStorage.setItem("admin", JSON.stringify({
                role: userRole,
            }));
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setRole('');
        if (typeof window !== "undefined") {
            localStorage.removeItem("admin");
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, role,}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
