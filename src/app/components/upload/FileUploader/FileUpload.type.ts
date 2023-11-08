import { IMovieImage } from '@/app/types/movie';

export type TFile = File & {
	preview?: string;
	size: number;
};

export type TFileUploaderProps = {
	containerClassName?: string;
	dropZoneClassName?: string;
	showPreview?: boolean;
	maxFiles: number;
	initialState?: IMovieImage[];
	onFileUpload?: (files: TFile[]) => void;
	onRemovePreviewFile?: (files: TFile, index?: number) => void;
};
