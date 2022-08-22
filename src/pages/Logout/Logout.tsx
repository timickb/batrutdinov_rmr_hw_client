import { AuthCtx } from "@/App";
import { useNavigate } from "react-router-dom";
import { logout } from "@/infrastructure/http";
import React, { useContext, useEffect, useState } from "react";

export default function Logout() {
    const { setAuth } = useContext(AuthCtx);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        logout().then(response => {
            if ('status' in response) {
                console.log('Logged out successfully');
                setSuccess(true);
            }
        }).finally(() => {
            setAuth(false);
            navigate('/');
        });
    }, []);

    return (
        <div id="container">
            {success ? "" : "You're not logged in"}
        </div>
    )
}