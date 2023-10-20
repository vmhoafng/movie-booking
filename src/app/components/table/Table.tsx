import React, { useCallback } from 'react';
import { TableHeaderProps, TableProps, TableRowProps } from './Table.type';

const TableHeader = ({ header }: TableHeaderProps) => {
	return (
		<div className="contents">
			{header.map((item) => {
				return (
					<div key={`header-${item}`} className="py-[10px]">
						{item}
					</div>
				);
			})}
		</div>
	);
};

const TableFooter = () => {
	return (
		<div className="col-span-7 py-5">
			<div className="">text</div>
		</div>
	);
};

function Table({ header, row, initialState }: TableProps) {
	const DataRow = useCallback(
		({ row, initialState }: TableRowProps) => {
			return (
				<div className="contents text-[15px]">
					{(initialState || []).map((obj) => {
						return row(obj);
					})}
				</div>
			);
		},
		[initialState]
	);

	return (
		<div
			className={`grid grid-cols-${header.length}  w-full px-6 bg-[#021339] border-borderColor border rounded`}
		>
			<TableHeader header={header} />
			<DataRow row={row} initialState={initialState} />
			<TableFooter />
		</div>
	);
}

export default Table;
