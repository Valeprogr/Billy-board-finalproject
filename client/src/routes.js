import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Login from './pages/login/Login';
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import UserHome from "./components/userHomepage/userHome/UserHome";
import ProfileUser from "./components/userHomepage/ProfileUser";
import Settings from "./components/userHomepage/Settings";
import EmployeeList from "./components/userHomepage/list/EmployeeList";
import ProjectsList from "./components/userHomepage/list/ProjectsList";
import CreateProject from "./components/userHomepage/CreateProject";
import CreateNewEmployee from "./components/userHomepage/CreateNewEmployee";
import SendMessage from "./components/userHomepage/sendMessage/SendMessage";



export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        
        return (
            <Routes>
                <Route path="/user/dashboard" element={<UserHome/>} />
                <Route path="/user/settings" element={<Settings/>} />
                <Route path="user/profile" element={<ProfileUser/>}/>
                <Route path="/employees" element={<EmployeeList/>} />
                <Route path="/projects" element={<ProjectsList/>} />
                <Route path="/createProject" element={<CreateProject/>} />
                <Route path="/createNewEmployee" element={<CreateNewEmployee />}/>
                <Route path="/sendMessage" element={<SendMessage/>}/>
                <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
            </Routes>
        );
    }

    return (
        <Routes>
            {/* <Route path="/" element={<Navbar />} /> */}
            <Route index element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}