import { TFile } from '@/app/components/upload/FileUploader';
import { FieldErrors } from 'react-hook-form';

export type ImageUploaderProps = {
	onFilePreview: (file: TFile) => void;
	label: string;
	initialImage?: string;
	variant?: 'vertical' | 'horizontal';
	id: string;
	errors: FieldErrors;
	clear: (s: string) => void;
};
