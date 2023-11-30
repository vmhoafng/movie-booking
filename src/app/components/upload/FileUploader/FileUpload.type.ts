import { IMovieImage } from '@/app/types/movie';
import { FieldErrors } from 'react-hook-form';

export type TFile = File & {
	preview?: string;
	size: number;
};

export type TFileUploaderProps = {
	id: string;
	errors: FieldErrors;
	clear: (s: string) => void;
	containerClassName?: string;
	dropZoneClassName?: string;
	showPreview?: boolean;
	maxFiles: number;
	initialState?: IMovieImage[];
	onFileUpload?: (files: TFile[]) => void;
	onRemovePreviewFile?: (files: TFile, index?: number) => void;
};
