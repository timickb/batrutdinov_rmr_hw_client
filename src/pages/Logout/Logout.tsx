import { AuthCtx } from "@/App";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { logout, StatusResponse } from "@/infrastructure/http";
import React, { useContext, useEffect } from "react";

export default function Logout() {
    const { isAuth, setAuth, username } = useContext(AuthCtx);
    const [cookies, setCookie, removeCookie] = useCookies(["auth-cookie"]);
    const navigate = useNavigate();

    useEffect(() => {
        removeCookie("auth-cookie");
        setAuth(false);
        navigate('/');
    }, []);

    return (<></>)
}