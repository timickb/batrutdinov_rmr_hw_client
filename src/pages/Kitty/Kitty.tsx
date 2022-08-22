import { HeaderCtx } from "@/App";
import Loader from "@/components/Loader/Loader";
import { getKitty, KittyResponse } from "@/infrastructure/http";
import React, { useEffect, useState, useContext } from "react";

export default function Kitty() {
    const {setHeader} = useContext(HeaderCtx);
    useEffect(() => setHeader('Kitty'), []);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [path, setPath] = useState('');

    useEffect(() => {
        setLoading(true);
        getKitty().then(resp => {
            if ('data' in resp) {
                setSuccess(true);
                setPath(resp.data.src);
            }
        }).finally(() => setLoading(false));
    }, []);

    return (
        <div style={{borderRadius: 24, overflow: 'hidden'}}>
            {loading ? <Loader /> : (
                success 
                ? <img src={path} width={400} height={400} />
                : <h3>Forbidden</h3>
            )}
        </div>
    )
}