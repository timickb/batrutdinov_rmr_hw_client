import { HeaderCtx } from "@/App";
import Loader from "@/components/Loader/Loader";
import { kitty, KittyResponse } from "@/infrastructure/http";
import React, { useEffect, useState, useContext } from "react";

export default function Kitty() {
    const {setHeader} = useContext(HeaderCtx);
    useEffect(() => setHeader('Kitty'), []);
    
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [path, setPath] = useState('');

    useEffect(() => {
        setLoading(true);
        kitty().then(data => {
            if ((data as KittyResponse).data != undefined) {
                setSuccess(true);
                setPath((data as KittyResponse).data.src);
            }
        }).finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? <Loader /> : (
                success 
                ? <img src={path} width={400} height={400} />
                : <h3>Forbidden</h3>
            )}
        </>
    )
}