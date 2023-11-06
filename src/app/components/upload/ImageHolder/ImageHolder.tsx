import { PhotoIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { ImageHolderProps } from './ImageHolder.type';

function ImageHolder({ children }: ImageHolderProps) {
	return (
		<div className="h-full flex flex-col items-center justify-center m-auto w-full border bg-white/20 border-[#D9D9D9]">
			<div className="text-center font-bold text-[13px] ">
				<PhotoIcon className="h-6 w-6 mx-auto" />
				{children}
			</div>
		</div>
	);
}

export default ImageHolder;
