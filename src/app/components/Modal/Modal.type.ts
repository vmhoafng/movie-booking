export type ModalContextProps = {
	openName: string;
	close: () => void;
	open: (name: string) => void;
};

export type ModalProps = {
	children: React.ReactNode;
};

export type OpenProps = {
	children: React.ReactElement;
	opens: string;
	isOpen?: boolean;
	disabled?: boolean;
};

export type WindowProps = {
	children: React.ReactElement;
	name: string;
};
	