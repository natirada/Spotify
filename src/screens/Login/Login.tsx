import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SpotifyLogo from '../../assets/icons/Spotify-Logo.wine.svg';
// @ts-ignore
import Styles from './styles.ts';

const AUTH_URL: string =
  'https://accounts.spotify.com/authorize?client_id=5ee29444731642b08101335f6a9f02fe&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Login = () => {
  const onClickLogin = () => {};

  return (
    <Styles.Container>
      <Styles.Image src={SpotifyLogo} />
      <a href={AUTH_URL}>
        <Styles.Btn>
          <Styles.Text>Login</Styles.Text>
        </Styles.Btn>
      </a>
    </Styles.Container>
  );
};

export default Login;
