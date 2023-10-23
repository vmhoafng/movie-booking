type Cell = {
	text: string;
	className?: string;
};

export type TableProps = {
	header: string[];
	row: (row: any) => JSX.Element;
	initialState: Object[];
	handleOnChangePage?: () => void;
};

export type TableHeaderProps = {
	header: string[];
};

export type TableRowProps = {
	row: (row: any) => JSX.Element;
	initialState: Object[];
};

export type PaginationButtonProps = {
	children: JSX.Element | string | number;
	disabled?: boolean;
	handleOnClick?: () => void;
	page?: number;
};
