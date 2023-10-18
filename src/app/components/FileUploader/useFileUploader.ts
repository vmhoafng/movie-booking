import { useCallback, useState } from 'react';
import { TFile } from './FileUpload.type';

export default function useFileUploader(
	showPreview: boolean = true,
	maxFiles: number = 8
) {
	const [selectedFiles, setSelectedFiles] = useState<TFile[]>([]);

	/**
	 * Remove file from selected files
	 * @param {Object} (file:TFile)
	 * @returns {function}
	 */
	const removeFile = useCallback(
		(file: TFile) => {
			const newFiles = [...selectedFiles];
			newFiles.splice(newFiles.indexOf(file), 1);
			setSelectedFiles(newFiles);
		},
		[selectedFiles]
	);

	/**
	 *  @param {Function} callback function to run after preview images
	 *  @param {Array.<TFile>} files all the accepted files
	 *  @description For handling preview images and validate them
	 */
	const handleAcceptedFiles = useCallback(
		(files: TFile[], callback?: (files: TFile[]) => void) => {
			let allFiles = files;

			if (showPreview) {
				files.forEach((file) => {
					Object.assign(file, {
						preview:
							file['type'].split('/')[0] === 'image'
								? URL.createObjectURL(file)
								: null,
					});
				});

				allFiles = [...selectedFiles];
				allFiles.push(...files);
				setSelectedFiles(allFiles);
			}
			if (callback) callback(allFiles);
		},
		[selectedFiles, showPreview]
	);
	return {
		removeFile,
		selectedFiles,
		handleAcceptedFiles,
	};
}
