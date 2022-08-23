import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import Login from '@/pages/Login/Login';
import Home from '@/pages/Home/Home';
import Kitty from '@/pages/Kitty/Kitty';
import Logout from '@/pages/Logout/Logout';
import NotFound from '@/pages/NotFound/NotFound';

import { getProfile } from '@/infrastructure/http';
import { Profile } from '@/models/Profile';

import '@/normalize.css';
import Loader from './components/Loader/Loader';
interface IHeaderContext {
  header: string;
  setHeader: Dispatch<SetStateAction<string>>;
}

interface IAuthContext {
  isAuth: boolean;
  profile: Profile;
  setAuth: Dispatch<SetStateAction<boolean>>;
  setProfile: Dispatch<SetStateAction<Profile>>;
}

export const HeaderCtx = createContext<IHeaderContext | null>({} as IHeaderContext);
export const AuthCtx = createContext<IAuthContext | null>({} as IAuthContext);

export default function App() {
  const [header, setHeader] = useState('');
  const [isAuth, setAuth] = useState(false);
  const [profile, setProfile] = useState({} as Profile);

  useEffect(() => {
    getProfile().then((response) => {
      if ('data' in response) {
        setAuth(true);
        setProfile(response.data);
      }
    });
  }, []);

  return (
    <AuthCtx.Provider value={{ isAuth, profile, setAuth, setProfile }}>
      <HeaderCtx.Provider value={{ header, setHeader }}>
        <Header />
        <div id="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={isAuth ? <Kitty /> : <Login />} />
            <Route path="/kitty" element={<Kitty />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/spinner" element={<Loader type="big" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </HeaderCtx.Provider>
    </AuthCtx.Provider>
  );
}
