import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@apollo/client';
import { graphql } from 'gql.tada';
import { useState } from 'react';
import { useAuth } from '../auth';

export const Route = createFileRoute('/login')({
	component: Login,
});

const LOGIN = graphql(`
	mutation Login($credentials: LoginInput!) {
		login(credentials: $credentials) {
			value
			isAuthenticated
		}
	}
`);

function Login() {
	const [login, { loading, error }] = useMutation(LOGIN);
	const navigate = useNavigate();
	const { setIsLoggedIn } = useAuth();

	const [formData, setFormData] = useState({
		input: '',
		password: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		console.log(formData);
		try {
			console.log('Logging in...');
			const { data } = await login({
				variables: {
					credentials: formData,
				},
			});

			if (data?.login?.isAuthenticated === true) {
				setIsLoggedIn(true);
				navigate({ to: '/' });
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor='usernameOrEmail'>Username or Email:</label>
					<input type='text' id='input' name='input' value={formData.input} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input type='password' id='password' name='password' value={formData.password} onChange={handleInputChange} />
				</div>
				<button type='submit' disabled={loading}>
					{loading ? 'Logging in...' : 'Login'}
				</button>
			</form>
			{error && <p>Error: {error.message}</p>}
		</div>
	);
}
