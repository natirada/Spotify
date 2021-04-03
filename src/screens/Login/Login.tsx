import { useEffect } from 'react';
import SpotifyLogo from '../../assets/icons/Spotify-Logo.wine.svg';
// @ts-ignore
import Styles from './styles.ts';

const AUTH_URL: string = 'https://accounts.spotify.com/authorize';

const Login = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('loging');
    });

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Styles.Container>
      <Styles.Image src={SpotifyLogo} />
      <Styles.Btn>
        <Styles.Text>Login</Styles.Text>
      </Styles.Btn>
    </Styles.Container>
  );
};

export default Login;
