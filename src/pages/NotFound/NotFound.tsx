import { HeaderCtx } from "@/App";
import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./NotFound.css";

export default function NotFound() {
    const { setHeader } = useContext(HeaderCtx);
    useEffect(() => setHeader('404'), []);
    
    return (
        <div>
            <h1 className="icon">
                <FontAwesomeIcon icon={faFileCircleXmark}/>
            </h1>
            <h2>Page not found</h2>
        </div>
    )
}