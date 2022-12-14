import { AuthCtx, HeaderCtx } from '@/App';
import React, { useContext, useEffect, } from 'react';
import './Home.css';

export default function Home() {
    const { setHeader } = useContext(HeaderCtx);
    const { isAuth, profile } = useContext(AuthCtx);

    useEffect(() => setHeader('Home'), []);

    return (
        <div id="home">
            {isAuth ? (
                <div className="profile">
                    <h3>Logged as {profile.name}</h3>
                    <p>{profile.email}</p>
                    <p>{profile.phone}</p>
                </div>
            ) : (
                'Kitty service home page'
            )}
        </div>
    );
}
