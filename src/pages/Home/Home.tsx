import { AuthCtx, HeaderCtx } from "@/App";
import { Profile } from "@/models/Profile";
import { getProfile } from "@/infrastructure/http"
import React, { useContext, useEffect, useState } from "react";

export default function Home() {
    const { setHeader } = useContext(HeaderCtx);
    const { isAuth } = useContext(AuthCtx);
    const [profile, setProfile] = useState({} as Profile);
    
    useEffect(() => {
        setHeader('Home')
        if (isAuth) {
            getProfile().then(res => {
                if ('data' in res) {
                    setProfile(res.data);
                }
            });
        }
    }, []);
    
    return (
        <div id="home">
            Kitty service home page
        </div>
    )
}