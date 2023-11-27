import ImageHolder from '@/app/components/upload/ImageHolder/ImageHolder';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { ImageUploaderProps } from './ImageUploader.type';
import { TFile } from '@/app/components/upload/FileUploader';

const variants = {
	vertical: 'w-[180px] h-[270px]',
	horizontal: 'w-[180px] h-[120px]',
};

function ImageUploader({
	initialImage,
	onFilePreview,
	label,
	variant = 'vertical',
}: ImageUploaderProps) {
	const [image, setImage] = useState<TFile | undefined>();
	return (
		<div className="">
			<Dropzone
				onDrop={(acceptedFiles) => {
					const file = acceptedFiles[0];
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					});
					setImage(file);
					onFilePreview(file);
				}}
				accept={{
					'image/jpeg': [],
					'image/png': [],
				}}
				maxFiles={1}
			>
				{({ getInputProps, getRootProps }) => (
					<div
						className={'hover:cursor-pointer ' + variants[variant]}
						{...getRootProps()}
					>
						<input {...getInputProps()} />
						{image?.preview || initialImage ? (
							<img
								className="h-full w-full border"
								src={image?.preview || initialImage}
								alt=""
							/>
						) : (
							<ImageHolder>{label}</ImageHolder>
						)}
					</div>
				)}
			</Dropzone>
			{/* <div className="mt-[10px]">
				<Dropzone
					onDrop={(acceptedFiles) => {
						const file: TFile = acceptedFiles[0];
						Object.assign(file, {
							preview: URL.createObjectURL(file),
						});
						setHorPoster(file);
					}}
					accept={{
						'image/jpeg': [],
						'image/png': [],
					}}
					maxFiles={1}
				>
					{({ getInputProps, getRootProps }) => (
						<div
							className="w-[180px] hover:cursor-pointer h-[120px]"
							{...getRootProps()}
						>
							<input {...getInputProps()} />
							{horPoster?.preview || movie?.horizontal_poster ? (
								<img
									className="h-full w-full border"
									src={horPoster?.preview || movie?.horizontal_poster}
									alt=""
								/>
							) : (
								<ImageHolder>Poster</ImageHolder>
							)}
						</div>
					)}
				</Dropzone>
			</div> */}
		</div>
	);
}

export default ImageUploader;
