import { useDispatch, useSelector } from 'react-redux';

/**
 * A custom React hook for conveniently accessing Redux's dispatch and selector methods.
 *
 * @returns {object} An object containing Redux's dispatch and selector methods.
 * @property {function} dispatch - The Redux dispatch function.
 * @property {function} appSelector - A Redux selector function for accessing the Redux store's state.
 */
export default function useRedux() {
	const dispatch = useDispatch();
	const appSelector = useSelector;

	return { dispatch, appSelector };
}
