import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router';
import { CenteredDiv } from '../../styles/CreateProjectStyles';
import { MoonLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { useAuth } from '../../auth';
import { useFindProject } from '../../services/findProject';
import { graphql } from 'gql.tada';
import { useMutation } from '@apollo/client';
import { EditProjectForm, EditProjectWrapper } from '../../styles/ProjectEditStyles';

export const Route = createFileRoute('/_layout-withAuth/projects/$projectid/edit')({
	component: EditProject,
});

const EDIT_PROJECT = graphql(`
	mutation EDIT_PROJECT($id: ID!, $createdBy: ID!, $description: String, $title: String) {
		editProject(_id: $id, createdBy: $createdBy, description: $description, title: $title) {
			title
			description
		}
	}
`);

function EditProject() {
	const projectId = useParams({ from: '/_layout-withAuth/projects/$projectid', select: (p) => p.projectid });

	const { user } = useAuth();
	const { data, loading } = useFindProject(projectId);

	const [isUserCreator, setIsUserCreator] = useState<boolean>(false);
	const [title, setTitle] = useState<string | undefined>('');
	const [description, setDescription] = useState<string>('');

	const navigate = useNavigate();

	const [editProject, { loading: editProjectLoading, error }] = useMutation(EDIT_PROJECT, {
		variables: {
			id: projectId,
			createdBy: user?._id as string,
			title,
			description,
		},
	});

	useEffect(() => {
		setDescription(data?.findProject?.description as string);
		setTitle(data?.findProject?.title as string);

		if (user?._id === data?.findProject?.createdBy?._id) {
			setIsUserCreator(true);
		}
	}, [user?._id, data?.findProject?.createdBy?._id, data?.findProject?.description, data?.findProject?.title]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const res = await editProject();

		if (res) {
			navigate({ to: `/projects/${projectId}` as string });
		}
	};

	if (loading || editProjectLoading) {
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

	if (!isUserCreator) {
		return (
			<CenteredDiv>
				<h1>You are not authorized to edit this project</h1>
			</CenteredDiv>
		);
	}

	return (
		<EditProjectWrapper>
			<h1>Edit Project</h1>
			<EditProjectForm onSubmit={handleSubmit}>
				<>
					<label htmlFor='title'>
						Title
						<input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
					</label>
					<label htmlFor='description'>
						Description
						<textarea
							id='description'
							name='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</label>
				</>
				<button type='submit' disabled={loading}>
					Confirm Changes
				</button>
			</EditProjectForm>
		</EditProjectWrapper>
	);
}
