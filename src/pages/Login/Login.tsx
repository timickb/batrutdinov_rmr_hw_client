import { AuthCtx, HeaderCtx } from '@/App';
import { getProfile, login } from '@/infrastructure/http';
import { Button } from '@/uikit/Button/Button';
import { TextField } from '@/uikit/TextField/TextField';
import { validate } from '@/utils/validation';
import { ErrorResponse } from '@/models/ErrorResponse';
import React, { BaseSyntheticEvent, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import Loader from '@/components/Loader/Loader';

type FormData = {
  email: string;
  phone: string;
  password: string;
};

type FormDataError = {
  email: boolean;
  phone: boolean;
  password: boolean;
  button: boolean;
};

export default function Login() {
  const { setHeader } = useContext(HeaderCtx);
  const authStore = useContext(AuthCtx);

  useEffect(() => setHeader('Signing in'), []);

  const [data, setData] = useState({} as FormData);
  const [error, setError] = useState({} as FormDataError);
  const [globalError, setGlobalError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event: BaseSyntheticEvent) => {
    const key = event.target.name as string;
    const value = event.target.value as string;
    setData({ ...data, [key]: value });
    setError({ ...error, [key]: value && !validate(key, value) });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (!data.email || !data.password || !data.phone) {
        setGlobalError('There are empty fields');
        return;
      }
      const res = await login(data);

      if ('status' in res) {
        getProfile()
          .then((response) => {
            if ('data' in response) {
              authStore.setAuth(true);
              authStore.setProfile(response.data);
            }
          })
          .catch((err) => console.log(err));
        return;
      }

      setGlobalError((res as ErrorResponse).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth_block">
      <div className="form_row">
        <TextField
          name="email"
          value={data.email}
          type="email"
          placeholder="Email *"
          error={error.email}
          onChange={handleChange}
        />
        <div className="error_text">{error.email ? 'Invalid email' : null}</div>
      </div>

      <div className="form_row">
        <TextField
          name="phone"
          value={data.phone}
          type="tel"
          placeholder="Phone number *"
          error={error.phone}
          onChange={handleChange}
        />
        <div className="error_text">{error.phone ? 'Invalid phone' : null}</div>
      </div>

      <div className="form_row">
        <TextField
          name="password"
          value={data.password}
          type="password"
          placeholder="Password *"
          error={error.password}
          onChange={handleChange}
        />
        <div className="error_text">{error.password ? 'Invalid password' : null}</div>
      </div>

      <div className="form_row">
        <Button onClick={handleLogin} disabled={error.email || error.password || error.phone}>
          {loading ? (
            <>
              <Loader type="small" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <div style={{ margin: 4 }} />
              Enter
            </>
          )}
        </Button>
        <div className="error_text">{globalError}</div>
      </div>
    </div>
  );
}
