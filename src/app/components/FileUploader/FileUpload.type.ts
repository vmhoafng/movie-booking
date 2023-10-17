export type TFile = File & {
	preview?: string;
	size: number;
};
export type TFileUploaderProps = {
	containerClassName?: string;
	dropZoneClassName?: string;
	showPreview?: boolean;
	maxFiles?: number;
	onFileUpload?: (files: TFile[]) => void;
	onRemovePreviewFile?: (files: TFile[]) => void;
};
