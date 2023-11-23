import { useEffect, useRef } from 'react';

export default function useOutsideClick(
	handler: () => void,
	listeningCapture: boolean = true
) {
	const ref = useRef<HTMLElement | null>(null);
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				handler();
			}
		};
		document.addEventListener('click', handleClick, listeningCapture);
		return () =>
			document.removeEventListener('click', handleClick, listeningCapture);
	}, [handler, listeningCapture]);

	return ref;
}
