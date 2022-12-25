import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./components/signin/Signin";
import Login from './pages/login/Login';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}