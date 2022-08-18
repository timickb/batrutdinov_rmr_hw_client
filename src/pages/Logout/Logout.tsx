import { AuthCtx } from "@/App";
import { useNavigate } from "react-router-dom";
import { logout, StatusResponse } from "@/infrastructure/http";
import React, { useContext, useEffect } from "react";

export default function Logout() {
    const { isAuth, setAuth, username } = useContext(AuthCtx);
    const navigate = useNavigate();

    useEffect(() => {
        logout().then(response => {
            if ('status' in response) {
                console.log('Logged out successfully');
            }
        }).finally(() => {
            setAuth(false);
            navigate('/');
        });
    }, []);

    return (<></>)
}