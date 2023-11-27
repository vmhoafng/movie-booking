import { TFile } from '@/app/components/upload/FileUploader';

export type ImageUploaderProps = {
	onFilePreview: (file: TFile) => void;
	label: string;
	initialImage?: string;
	variant?: 'vertical' | 'horizontal';
};
