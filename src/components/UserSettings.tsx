import { useEffect, useState } from 'react';
import { CenteredDiv, CreateProjectForm } from '../styles/CreateProjectStyles.js';
import { MoonLoader } from 'react-spinners';
import { useGetCurrentUser } from '../services/getCurrentUser.js';
import ImageUploader from './ImageUploads/ImageUploader';
import { useMutation } from '@apollo/client';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../auth';
import {
	ButtonFlexColumn,
	EditCustomFlexRow,
	UserEditFlexBox,
	UserEditFormWrapper,
} from '../styles/UserSettingStyles.js';
import { EDIT_USER } from '../gql/mutations.js';
import { AUTH_CURRENT_USER } from '../gql/queries.js';
import { User } from '../types/user.js';

const UserSettings = () => {
	const { data, error, loading } = useGetCurrentUser();

	const currentUser = data?.currentUser;

	const [userName, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string>('');

	const navigate = useNavigate();
	const { setUser } = useAuth();

	const [editUser, { loading: editUserLoading, error: editUserError }] = useMutation(EDIT_USER, {
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
			setImageUrl(currentUser?.imageUrl as string);
		}
	}, [currentUser]);

	if (loading || editUserLoading) {
		return (
			<CenteredDiv>
				<MoonLoader color='var(--blue)' />
			</CenteredDiv>
		);
	}

	if (error || editUserError) {
		return (
			<CenteredDiv>
				<h1>Error: {error?.message}</h1>
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
			refetchQueries: [{ query: AUTH_CURRENT_USER }],
		});

		if (res) {
			setUser(res?.data?.editUser as User);
			navigate({ to: `/user/${currentUser?.username}` as string });
		}
	};

	return (
		<UserEditFormWrapper>
			<CreateProjectForm onSubmit={handleSubmit}>
				<EditCustomFlexRow>
					<label htmlFor='image'>
						{' '}
						User Image
						<ImageUploader id='image' setImageUrl={setImageUrl} existingImage={currentUser?.imageUrl} />
					</label>
					<UserEditFlexBox>
						<label>
							Username
							<input type='text' value={userName} onChange={(e) => setUsername(e.target.value)} />
						</label>
						<label>
							Email
							<input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
						</label>
						<ButtonFlexColumn>
							<button onClick={() => navigate({ to: `/user/${currentUser?.username}/editpassword` as string })}>
								Update Password
							</button>
							<button onClick={() => navigate({ to: `/user/${currentUser?.username}/delete` as string })}>
								Delete Account
							</button>
						</ButtonFlexColumn>
					</UserEditFlexBox>
				</EditCustomFlexRow>

				<button type='submit' disabled={loading}>
					Confirm Changes
				</button>
			</CreateProjectForm>
		</UserEditFormWrapper>
	);
};
export default UserSettings;
