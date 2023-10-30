export type TableProps = {
	header: string[];
	row: (row: any, index?: number) => JSX.Element;
	handleOnChangePage?: () => void;
};

export type TableHeaderProps = {
	header: string[];
};

export type TableRowProps = {
	row: (row: any, index?: number) => JSX.Element;
	initialState: Object[];
};

export type PaginationButtonProps = {
	children: JSX.Element | string | number;
	disabled?: boolean;
	handleOnClick?: () => void;
	page?: number;
};
