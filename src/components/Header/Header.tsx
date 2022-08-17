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
        }
    }

    return (
        <div className="header">
            <div>
                {header}
            </div>
            <div>
                {isAuth ?
                    <div className="state_row">
                        <p>{username}</p>
                        <Button width={100} padding={4} onClick={handleLogout}>
                            Log out
                        </Button>
                    </div>
                    : 
                    <Link to="/login">
                        <Button width={100} padding={4}>Log in</Button>
                    </Link>}
            </div>
        </div>
    )
}