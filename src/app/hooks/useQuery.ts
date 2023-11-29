import { useLocation } from 'react-router';

export default function useQuery() {
	const location = useLocation();
	return new URLSearchParams(location.search);
}
