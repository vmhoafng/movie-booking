import { createSlice } from '@reduxjs/toolkit';

type ILayoutState = {
	isOpen: boolean;
};

const initialState: ILayoutState = {
	isOpen: false,
};

const layoutSlice = createSlice({
	name: '@@layout',
	initialState,
	reducers: {
		setOpen: (state, action) => {
			state.isOpen = action.payload;
		},
	},
});

export const { setOpen } = layoutSlice.actions;

export default layoutSlice.reducer;
