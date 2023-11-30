import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useNavbar() {
	const [active, setActive] = useState<string>();
	const location = useLocation();
	useEffect(() => {
		setActive(location.pathname);
	}, [location]);
	return {
		active,
	};
}
