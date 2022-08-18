import React, { useContext } from "react";
import {Link} from "react-router-dom";
import "@/components/Header/Header.css"
import { AuthCtx, HeaderCtx } from "@/App";
import { Button } from "@/uikit/Button/Button";
import { logout, StatusResponse } from "@/infrastructure/http";


export default function Header() {
    const { header } = useContext(HeaderCtx);
    const { isAuth, setAuth, username } = useContext(AuthCtx);

    const handleLogout = async () => {
        const response = await logout();
        if ((response as StatusResponse).status != undefined) {
            setAuth(false);
            document.cookie = "auth-cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    }

    return (
        <div className="header">
            <div className="state_row">
                <Link to="/"><div className="logo" /></Link>
                <div style={{marginRight: 8}} />
                <div className="title">
                    {header}
                </div>
            </div>

            <div className="state_row">
                <p style={{marginTop: 12}}>{isAuth ? username : ""}</p>
                <div style={{marginRight: 5}} />

                {isAuth ? <>
                <Link to="/kitty">
                    <Button width={100} padding={4}>Get kitty</Button>
                </Link>
                <Link to="/logout">
                    <Button width={100} padding={4}>Log out</Button>
                </Link>
                </> :
                <Link to="/login">
                    <Button width={100} padding={4}>Log in</Button>
                </Link>
                } 
            </div>
        </div>
    )
}