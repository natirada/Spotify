import { useEffect } from 'react';
import Styles from './styles';
import SpotifyLogo from '../../assets/icons/Spotify-Logo.wine.svg';

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
