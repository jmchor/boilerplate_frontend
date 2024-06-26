import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useGetCurrentUser } from '../../services/getCurrentUser.js';
import { CenteredDiv, CreateFormWrapper, CreateProjectForm, FlexRow } from '../../styles/CreateProjectStyles.js';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_PASSWORD } from '../../gql/mutations.js';
import { CURRENT_USER } from '../../gql/queries.js';
import { MoonLoader } from 'react-spinners';

export const Route = createFileRoute('/_layout-withAuth/user/$username/editpassword')({
	component: UpdatePassword,
});

function UpdatePassword() {
	const { data, error, loading } = useGetCurrentUser();
	const navigate = useNavigate();

	const [updatePassword, { data: updatePasswordData, loading: updatePasswordLoading, error: updatePasswordError }] =
		useMutation(UPDATE_PASSWORD);

	const [oldPassword, setOldPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (newPassword !== confirmPassword) {
			alert('Passwords do not match');
		}

		const res = await updatePassword({
			variables: {
				id: currentUser?._id,
				oldPassword,
				newPassword,
			},
			refetchQueries: [{ query: CURRENT_USER }],
		});

		if (res) {
			navigate({ to: `/user/${currentUser?.username}` as string });
		}
	};

	const currentUser = data?.currentUser;

	if (loading || updatePasswordLoading) {
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

	return (
		<CreateFormWrapper>
			<CreateProjectForm onSubmit={handleSubmit}>
				{updatePasswordError && <p>{updatePasswordError.message}</p>}
				<label htmlFor='oldPassword'>
					Old Password
					<input
						type={showPassword ? 'text' : 'password'}
						id='oldPassword'
						name='oldPassword'
						value={oldPassword}
						onChange={(e) => setOldPassword(e.target.value)}
					/>
				</label>

				<label htmlFor='newPassword'>
					New Password
					<input
						type={showPassword ? 'text' : 'password'}
						id='newPassword'
						name='newPassword'
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
					/>
				</label>

				<label htmlFor='confirmPassword'>
					Confirm New Password
					<input
						type={showPassword ? 'text' : 'password'}
						id='confirmPassword'
						name='confirmPassword'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</label>

				<FlexRow>
					<button type='button' onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? 'Hide Passwords' : 'Show Passwords'}
					</button>
					<button type='submit'>Submit</button>
				</FlexRow>
			</CreateProjectForm>
		</CreateFormWrapper>
	);
}
