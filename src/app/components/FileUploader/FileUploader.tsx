import React, { useCallback, useState } from 'react';
import { TFile, TFileUploaderProps } from './FileUpload.type';
import Dropzone from 'react-dropzone';
import useFileUploader from './useFileUploader';

function FileUploader({
	showPreview,
	maxFiles,
	dropZoneClassName,
	containerClassName,
	onFileUpload,
	onRemovePreviewFile,
}: TFileUploaderProps) {
	const { selectedFiles, removeFile, handleAcceptedFiles } =
		useFileUploader(showPreview);

	const renderPreview = useCallback(() => {
		if (selectedFiles.length > 0 && showPreview) {
			return <div className="">test</div>;
		}
	}, [selectedFiles, showPreview, removeFile]);

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
