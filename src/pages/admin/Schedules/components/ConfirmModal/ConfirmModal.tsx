import React, { ForwardedRef, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import { ConfirmModalProps } from './ConfirmModal.type';

function ConfirmModal({ isOpen, setIsOpen, children }: ConfirmModalProps) {
	const close = () => {
		setIsOpen(false);
	};
	if (!isOpen) return null;
	return createPortal(
		<div
			className="fixed top-0 left-0 w-full h-screen backdrop-filter z-[1000] bg-black/40"
			// onClick={close}
		>
			<div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#0E1946] py-[32px] px-[46px]">
				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</div>
		</div>,
		document.body
	);
}

export default ConfirmModal;
