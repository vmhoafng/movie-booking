import React from 'react';

const TableHeader = ({ test, columns }: any) => {
	return (
		<div className="w-full flex gap-4">
			{columns.map((column: any) => {
				return test(column);
			})}
		</div>
	);
};

function Table() {
	return (
		<div className="w-full px-6 py-8 border rounded">
			<div className="flex gap-5">
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
			</div>
			<div className="flex gap-5">
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
			</div>
			<div className="flex gap-5">
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
			</div>
			<div className="flex gap-5">
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
			</div>
			<div className="flex gap-5">
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
				<div className="flex-[0_0_12%]">Test_Data</div>
			</div>
		</div>
	);
}

export default Table;
