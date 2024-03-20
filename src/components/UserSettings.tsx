import { graphql } from 'gql.tada';
import { useEffect, useState } from 'react';
import { CenteredDiv, CreateFormWrapper, CreateProjectForm } from '../styles/CreateProjectStyles';
import { MoonLoader } from 'react-spinners';
import { useGetCurrentUser } from '../services/getCurrentUser';
import styled from 'styled-components';
import ImageUploader from './ImageUploads/ImageUploader';
import { useMutation } from '@apollo/client';
import { useNavigate } from '@tanstack/react-router';
import { CURRENT_USER, useAuth } from '../auth';

const EDIT_USER = graphql(`
	mutation EDIT_USER($id: ID!, $username: String, $email: String, $imageUrl: String) {
		editUser(_id: $id, username: $username, email: $email, imageUrl: $imageUrl) {
			username
			email
			imageUrl
		}
	}
`);
const UserSettings = () => {
	const { data, error, loading } = useGetCurrentUser();

	const currentUser = data?.currentUser;

	const [userName, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string>('');

	const navigate = useNavigate();
	const { setUser } = useAuth();

	const [editUser, { data: editUserData, loading: editUserLoading, error: editUserError }] = useMutation(EDIT_USER, {
		variables: {
			id: currentUser?._id,
			username: userName,
			email,
			imageUrl,
		},
	});

	useEffect(() => {
		if (currentUser) {
			setUsername(currentUser.username);
			setEmail(currentUser.email);
			setImageUrl(currentUser?.imageUrl);
		}
	}, [currentUser]);

	useEffect(() => {
		console.log(imageUrl);
	}, [imageUrl]);

	if (loading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error) {
		return (
			<CenteredDiv>
				<h1>Error: {error.message}</h1>
			</CenteredDiv>
		);
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const res = await editUser({
			variables: {
				id: currentUser?._id,
				username: userName,
				email,
				imageUrl,
			},
			refetchQueries: [{ query: CURRENT_USER }],
		});

		if (res) {
			setUser(res.data.editUser);
			navigate({ to: `/user/${currentUser?.username}` as string });
		}
	};

	return (
		<UserEditFormWrapper>
			<CreateProjectForm onSubmit={handleSubmit}>
				<label>
					Username
					<input type='text' value={userName} onChange={(e) => setUsername(e.target.value)} />
				</label>
				<label>
					Email
					<input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<label htmlFor='image'>
					{' '}
					User Image
					<ImageUploader id='image' setImageUrl={setImageUrl} existingImage={currentUser?.imageUrl} />
				</label>

				<button type='submit' disabled={loading}>
					Confirm Changes
				</button>
			</CreateProjectForm>
		</UserEditFormWrapper>
	);
};
export default UserSettings;

const UserEditFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
