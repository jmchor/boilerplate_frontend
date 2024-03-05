import { useMutation } from '@apollo/client';
import { graphql } from 'gql.tada';
import { useNavigate } from '@tanstack/react-router';
import Form from '../styles/Form.js';
import { SyncLoader } from 'react-spinners';

import { SigninFormWrapper } from '../styles/SigninForm.js';
import useForm from '../lib/useForm.js';

import { LoaderStyles } from '../styles/LoaderStyles.js';

const SIGNUP_MUTATION = graphql(`
	mutation CreateUser($email: String!, $username: String!, $password: String!) {
		createUser(email: $email, username: $username, password: $password) {
			_id
			email
			username
		}
	}
`);

const SignupForm: React.FC = () => {
	const { inputs, handleChange, resetForm } = useForm({
		email: '',
		password: '',
		username: '',
	});

	const navigate = useNavigate();

	const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
		variables: inputs,
		onCompleted: () => {
			setTimeout(() => {
				navigate({ to: '/login' });
			}, 5000);
		},
	});
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		//any error returned from the mutate function is caught for the console - the actual error with message and all is already part of what the useMutation hook returns as 2nd array item
		await signup().catch(console.error);

		resetForm();
		//send email and password to graph ql api
	};

	return (
		<SigninFormWrapper>
			{data?.createUser ? (
				<LoaderStyles>
					<p>
						Signed up with <b>{data.createUser.email}</b> - Please go ahead and sign in!
					</p>
					<p>Redirecting you to login.</p>
					<SyncLoader color='#8fb1ec' />
				</LoaderStyles>
			) : (
				<Form onSubmit={handleSubmit}>
					<label htmlFor='username'>
						Username
						<input type='text' id='username' name='username' value={inputs.username} onChange={handleChange} />
					</label>
					<label htmlFor='email'>
						Email
						<input type='text' id='email' name='email' value={inputs.email} onChange={handleChange} />
					</label>
					<label htmlFor='password'>
						Password
						<input type='password' id='password' name='password' value={inputs.password} onChange={handleChange} />
					</label>

					<button type='submit' disabled={loading}>
						Sign Me Up
					</button>
				</Form>
			)}

			{error ? (
				<p>{error.message}</p>
			) : (
				<p>
					{' '}
					<br />
				</p>
			)}
		</SigninFormWrapper>
	);
};

export default SignupForm;
