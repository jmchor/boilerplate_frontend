import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MoonLoader } from 'react-spinners';

const ImagePreview = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	padding: 5px;
	background: #e6e6e6;
`;

const FileInputButton = styled.label`
	background-color: var(--darkpurple);
	color: #fff;
	padding: 8px 12px;
	border: none;
	cursor: pointer;
	border-radius: 4px;
	width: 20rem !important;

	&:aria-disabled {
		opacity: 0.5;
	}
`;

const FileInput = styled.input`
	display: none;
`;

const UploadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 250px;

	button {
		font-size: 16px;
		width: 20rem;
		background-color: var(--darkpurple);
		color: white;
	}
`;

const ImageFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
`;

const ImageUploader = ({
	setImageUrl,
	existingImage,
}: {
	setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
	existingImage: string | null;
}) => {
	const [image, setImage] = useState<File | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [preview, setPreview] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);
	const [defaultImage, setDefaultImage] = useState<string | null>('');

	const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
	const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_NAME;

	const uploadImage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const data = new FormData();
		data.append('file', image as File);
		data.append('upload_preset', CLOUDINARY_PRESET);
		data.append('cloud_name', CLOUDINARY_CLOUD_NAME);
		data.append('folder', 'codeBase');

		try {
			const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
				method: 'POST',
				body: data,
			});
			const res = await response.json();
			if (res) {
				setSuccess(true);
			}
			setImageUrl(res.secure_url);
			setLoading(false);

			console.log('Image Changed');
		} catch (error) {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (existingImage) {
			setDefaultImage(existingImage);
		} else {
			setDefaultImage('../../../static/no-image.svg');
		}
	}, [existingImage]);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		const selectedFiles = files as FileList;
		const file = selectedFiles[0];
		setImage(file);

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = () => {
			setPreview(reader.result);
		};
	};

	return (
		<UploadWrapper>
			{!loading ? (
				<ImageFrame>
					{preview ? (
						<ImagePreview src={preview} alt='preview' />
					) : (
						<ImagePreview src={defaultImage as string} alt='preview' />
					)}
				</ImageFrame>
			) : (
				<ImageFrame>
					<MoonLoader color='var(--blue)' />
				</ImageFrame>
			)}

			<FileInputButton htmlFor='file-upload' aria-disabled={image ? false : true}>
				Choose File
				<FileInput id='file-upload' type='file' onChange={handleImageChange} accept='image/*' />
			</FileInputButton>
			<div>
				{!success ? (
					<button onClick={uploadImage} disabled={!image}>
						Upload now
					</button>
				) : (
					<p>File uploaded successfully</p>
				)}
			</div>
		</UploadWrapper>
	);
};

export default ImageUploader;
