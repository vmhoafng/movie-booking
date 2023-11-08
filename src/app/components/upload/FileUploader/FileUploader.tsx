import React, { useCallback, useState } from 'react';
import { TFile, TFileUploaderProps } from './FileUpload.type';
import Dropzone from 'react-dropzone';
import useFileUploader from './useFileUploader';
import { ArrowDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import ImageHolder from '../ImageHolder/ImageHolder';
import { XMarkIcon } from '@heroicons/react/20/solid';

const dragActiveClassName = 'bg-black/50 ';

function FileUploader({
	showPreview = true,
	maxFiles = 8,
	containerClassName,
	onFileUpload,
	onRemovePreviewFile,
	initialState,
}: TFileUploaderProps) {
	const { selectedFiles, removeFile, handleAcceptedFiles } = useFileUploader(
		showPreview,
		maxFiles
	);

	const renderPreview = useCallback(() => {
		if (showPreview) {
			return (
				<div className="grid grid-cols-4 gap-y-5 gap-x-7">
					{(
						[
							...(initialState || []),
							...selectedFiles,
							...((initialState || []).length <= maxFiles
								? Array(
										maxFiles -
											((initialState?.length || 0) + selectedFiles.length)
								  ).fill(0)
								: []),
						] || []
					).map((file, index) => {
						return (
							<div
								className={`${
									file.preview || initialState?.[index] ? 'z-10' : ''
								} group/overlay h-40 relative`}
								key={`file-${index}`}
							>
								{file.preview || initialState?.[index] ? (
									<>
										<img
											src={file.preview || initialState?.[index].path}
											alt={file.name}
											className=" object-cover border  h-full w-full"
										/>
										<div className="hidden absolute group-hover/overlay:flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black/50">
											<div
												className="group/cross overflow-hidden cursor-pointer "
												onClick={() => {
													console.log(!initialState?.[index]?.path);

													!initialState?.[index]?.path && removeFile(file);
													onRemovePreviewFile &&
														onRemovePreviewFile(file, index);
												}}
											>
												<p className=" group-hover/cross:w-[100px] whitespace-nowrap rounded-sm pr-2 w-[24px]  hover:bg-gradientStart/80 transition-all ease-in-out duration-300 ">
													<XMarkIcon className="h-5.5 w-6 pb-[3px] inline-block" />
													<span className="font-bold">Remove</span>
												</p>
											</div>
										</div>
									</>
								) : (
									<ImageHolder key={`file-${index}`}>Hình ảnh</ImageHolder>
								)}
							</div>
						);
					})}
				</div>
			);
		}
	}, [
		selectedFiles,
		showPreview,
		maxFiles,
		onRemovePreviewFile,
		removeFile,
		initialState,
	]);

	return (
		<div className="relative">
			<Dropzone
				maxFiles={maxFiles}
				disabled={selectedFiles.length === maxFiles}
				accept={{
					'image/*': [],
				}}
				onDrop={(acceptedFiles) =>
					handleAcceptedFiles(acceptedFiles, onFileUpload)
				}
			>
				{({ getRootProps, getInputProps, isDragActive }) => (
					<div
						className={`absolute top-0 left-0 right-0 bottom-0 z-[1] hover:cursor-pointer w-full ${
							isDragActive && dragActiveClassName
						}`}
						{...getRootProps()}
					>
						<div
							className={` ${
								isDragActive
									? 'flex items-center justify-center font-bold text-2xl h-full'
									: 'hidden'
							} `}
						>
							Drop here
							<ArrowDownIcon className="h-5 w-5" />
						</div>

						<input {...getInputProps()} />
					</div>
				)}
			</Dropzone>
			{renderPreview()}
		</div>
	);
}

export default FileUploader;
