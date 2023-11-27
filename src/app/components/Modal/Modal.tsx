import React, {
	ForwardedRef,
	cloneElement,
	createContext,
	useContext,
	useState,
} from 'react';
import {
	ModalContextProps,
	ModalProps,
	OpenProps,
	WindowProps,
} from './Modal.type';
import { createPortal } from 'react-dom';
import useOutsideClick from './hooks/useOutsideClick';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const ModalContext = createContext<ModalContextProps | undefined>(
	undefined
);

function Modal({ children }: ModalProps) {
	const [openName, setOpenName] = useState<string>('');

	const close = () => {
		console.log('Closing modal');
		setOpenName('');
	};

	const open = (name: string) => {
		console.log('Opening modal with name:', name);
		setOpenName(name);
	};

	return (
		<ModalContext.Provider value={{ openName, close, open }}>
			{children}
		</ModalContext.Provider>
	);
}

function Open({ children, opens: opensWindowName }: OpenProps) {
	const { open } = useContext(ModalContext)!;

	return cloneElement(children, {
		onClick: () => {
			console.log('Attempting to open modal with name:', opensWindowName);
			open(opensWindowName);
		},
	});
}

function Window({ children, name }: WindowProps) {
	const { openName, close } = useContext(ModalContext)!;
	const ref = useOutsideClick(close)!;
	if (name !== openName) return null;

	return createPortal(
		<div className="fixed top-0 left-0 w-full h-screen backdrop-filter z-[1000] bg-black/40">
			<div
				className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#0E1946] py-[32px] px-[20px]"
				ref={ref as ForwardedRef<HTMLDivElement>}
			>
				<button className="p-1 absolute top-3 right-[19px] " onClick={close}>
					<XMarkIcon className="h-6 w-6 text-borderColor" />
				</button>
				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</div>
		</div>,
		document.body
	);
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
