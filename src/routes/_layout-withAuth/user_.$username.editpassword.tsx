import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { CURRENT_USER, useGetCurrentUser } from '../../services/getCurrentUser.js';
import { graphql } from 'gql.tada';
import { CreateFormWrapper, CreateProjectForm, FlexRow } from '../../styles/CreateProjectStyles.js';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

export const Route = createFileRoute('/_layout-withAuth/user/$username/editpassword')({
	component: UpdatePassword,
});

const UPDATE_PASSWORD = graphql(`
	mutation UPDATE_PASSWORD($id: ID!, $oldPassword: String!, $newPassword: String!) {
		updatePassword(_id: $id, oldPassword: $oldPassword, newPassword: $newPassword) {
			username
			_id
		}
	}
`);

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

	return (
		<CreateFormWrapper>
			<CreateProjectForm onSubmit={handleSubmit}>
				{updatePasswordError && <p>{updatePasswordError}</p>}
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
