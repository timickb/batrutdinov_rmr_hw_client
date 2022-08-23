import { HeaderCtx } from '@/App';
import Loader from '@/components/Loader/Loader';
import { getKitty } from '@/infrastructure/http';
import React, { useEffect, useState, useContext } from 'react';

const min = (a: number, b: number): number => {
  return a < b ? a : b;
};

export default function Kitty() {
  const { setHeader } = useContext(HeaderCtx);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [path, setPath] = useState('');

  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleChangeDimension = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => setHeader('Kitty'), []);
  useEffect(() => {
    window.addEventListener('resize', handleChangeDimension);
    return () => {
      window.removeEventListener('resize', handleChangeDimension);
    };
  }, [dimension]);

  useEffect(() => {
    setLoading(true);
    getKitty()
      .then((resp) => {
        if ('data' in resp) {
          setSuccess(true);
          setPath(resp.data.src);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ borderRadius: 24, overflow: 'hidden' }}>
      {loading ? (
        <Loader type="big" />
      ) : success ? (
        <img
          src={path}
          width={min(400, dimension.width - 16)}
          height={min(400, dimension.width - 16)}
        />
      ) : (
        <h3>Forbidden</h3>
      )}
    </div>
  );
}
