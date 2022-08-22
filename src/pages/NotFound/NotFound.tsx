import { HeaderCtx } from "@/App";
import React, { useContext, useEffect } from "react";


export default function NotFound() {
    const { setHeader } = useContext(HeaderCtx);
    useEffect(() => setHeader('404'), []);
    
    return (
        <div>
            <h1 style={{fontSize: 56}}>:-(</h1>
            <h2>Page not found</h2>
        </div>
    )
}