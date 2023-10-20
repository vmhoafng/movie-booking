type Cell = {
	text: string;
	className?: string;
};

export type TableProps = {
	header: string[];
	row: (row: any) => JSX.Element;
	initialState: Object[];
};

export type TableHeaderProps = {
	header: string[];
};

export type TableRowProps = {
	row: (row: any) => JSX.Element;
	initialState: Object[];
};
