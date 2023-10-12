import { useEffect, useState } from 'react';

/**
 * @description Custom hook for debouncing an input value on input or change events.
 * @param {string} value - The input value to be debounced.
 * @param {number} delay - The delay in milliseconds for debouncing (default is 1000ms).
 * @returns {string} - The debounced value.
 */

export default function useDebounce(value, delay = 1000) {
	//khởi tao state
	const [debounceValue, setDebounceValue] = useState(value);

	//khởi tạo debounce, delay 1s
	useEffect(() => {
		const timer = setTimeout(() => setDebounceValue(value), delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);
	return debounceValue;
}
