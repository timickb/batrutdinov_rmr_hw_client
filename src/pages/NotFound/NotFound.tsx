import { HeaderCtx } from "@/App";
import React, { useContext, useEffect } from "react";
// @ts-ignore
import Icon from "@/assets/404.png";


export default function NotFound() {
    const { setHeader } = useContext(HeaderCtx);
    useEffect(() => setHeader('404'), []);
    
    return (
        <div>
            <img src={Icon} alt="404" />
            <h2>Page not found</h2>
        </div>
    )
}