import { kitty, KittyResponse } from "@/infrastructure/http";
import React, { useEffect, useState } from "react";

export default function Kitty() {
    const [success, setSuccess] = useState(false);
    const [path, setPath] = useState('');

    useEffect(() => {
        kitty().then(data => {
            if ((data as KittyResponse).data != undefined) {
                setSuccess(true);
                setPath((data as KittyResponse).data.src);
            } else {
                setSuccess(false);
            }
        });
    }, []);

    return (
        <>
            {success 
            ? <img src={path} />
            : <h2>fail</h2>}
        </>
    )
}