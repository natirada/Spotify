import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useAuth = (code: string | null) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    console.log('front resned');
    axios
      .post('http://localhost:6060/login', { code })
      .then((res) => {
        console.log('res', res);

        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        history.push('/');
      })
      .catch((e) => {
        console.log('e', e);
        history.push('/');
      });
  }, [code]);

  useEffect(() => {
    let interval: any;
    if (typeof expiresIn === 'number' && refreshToken) {
      interval = setInterval(() => {
        //  console.log('setInterval');
        axios
          .post('http://localhost:6060/refresh', { refreshToken })
          .then((res) => {
            console.log('res refresh', res);
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
          })
          .catch((e) => {
            console.log('e', e);
          });
      }, expiresIn * 1000);
    }

    return () => clearInterval(interval);
  }, [expiresIn, refreshToken]);

  console.log('expiresIn', expiresIn);
  console.log('refreshToken', refreshToken);

  return { accessToken };
};

export default useAuth;
