import React, { useCallback, useState } from 'react';
import { TFile, TFileUploaderProps } from './FileUpload.type';
import Dropzone from 'react-dropzone';
import useFileUploader from './useFileUploader';
import { PlusIcon } from '@heroicons/react/20/solid';

function FileUploader({
	showPreview,
	maxFiles,
	dropZoneClassName,
	containerClassName,
	onFileUpload,
	onRemovePreviewFile,
}: TFileUploaderProps) {
	const { selectedFiles, removeFile, handleAcceptedFiles } = useFileUploader(
		showPreview,
		maxFiles
	);

	const renderPreview = useCallback(() => {
		if (showPreview) {
			return (
				<div className="flex justify-center flex-wrap gap-4">
					{(
						[
							...selectedFiles,
							...Array(maxFiles - selectedFiles.length).fill(0),
						] || []
					).map((file, index) => {
						console.log(file);

						if (!file)
							return (
								<div
									key={`file-${index}`}
									className="bg-[#D9D9D9] border-2 border-white flex justify-center items-center h-28 flex-[0_0_20%] "
								>
									<PlusIcon className="h-8 w-8" />
								</div>
							);
						return (
							<div key={`file-${index}`} className=" h-28 flex-[0_0_20%] ">
								<img
									// @ts-ignore
									src={file.preview}
									// @ts-ignore
									alt={file.name}
									className=" object-cover h-full w-full"
								/>
							</div>
						);
					})}
				</div>
			);
		}
	}, [selectedFiles, showPreview, removeFile, maxFiles]);

	return (
		<div className={containerClassName}>
			<Dropzone
				maxFiles={maxFiles}
				disabled={selectedFiles.length === maxFiles}
				accept={{
					'image/*': ['.png'],
				}}
				onDrop={(acceptedFiles) =>
					handleAcceptedFiles(acceptedFiles, onFileUpload)
				}
			>
				{({ getRootProps, getInputProps }) => (
					<div className={dropZoneClassName} {...getRootProps()}>
						<input {...getInputProps()} />
						<p>
							{selectedFiles.length} out of {maxFiles}
						</p>
					</div>
				)}
			</Dropzone>
			{renderPreview()}
		</div>
	);
}

export default FileUploader;
