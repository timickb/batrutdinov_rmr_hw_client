import { HeaderCtx } from "@/App";
import React, { useContext, useEffect } from "react";

export default function Home() {
    const { setHeader } = useContext(HeaderCtx);
    useEffect(() => setHeader('Home'), []);
    
    return (
        <div id="home">
            Kitty service home page
        </div>
    )
}