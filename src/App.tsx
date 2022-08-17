import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "@/normalize.css";
import Kitty from "./pages/Kitty/Kitty";

interface IHeaderContext {
    header: string
    setHeader: Dispatch<SetStateAction<string>>
}

interface IAuthContext {
    isAuth: boolean
    username: string
    setAuth: Dispatch<SetStateAction<boolean>>
    setUsername: Dispatch<SetStateAction<string>>
}

export const HeaderCtx = createContext<IHeaderContext | null>({} as IHeaderContext);
export const AuthCtx = createContext<IAuthContext | null>({} as IAuthContext);

export default function App() {
    const [header, setHeader] = useState('Default');
    const [isAuth, setAuth] = useState(false);
    const [username, setUsername] = useState('');

    return (
        <AuthCtx.Provider value={{isAuth, username, setAuth, setUsername}}>
            <HeaderCtx.Provider value={{header, setHeader}}>
                <Header />
                <div id="container">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/login" element={isAuth ? <Kitty /> : <Login />}/>
                        <Route path="/kitty" element={<Kitty />} />
                        <Route path="*" element={<h2>Page not found</h2>}/>
                    </Routes>
                </div>
                <Footer />
            </HeaderCtx.Provider>
        </AuthCtx.Provider>
    )
}