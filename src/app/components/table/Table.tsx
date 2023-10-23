import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PaginationButtonProps, TableProps } from './Table.type';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import useSearchTopbar from '../inputs/SearchTopbar/useSearchTopbar';
import useWindowDimensions from '@/app/hooks/useWindowDimensions';
import { number } from 'yup';
import useTable from './useTable';

function PaginationButton({
	children,
	disabled,
	handleOnClick,
	page,
}: PaginationButtonProps) {
	return (
		<div
			onClick={handleOnClick}
			data-page={page}
			className={`${
				disabled ? 'text-gray-400' : ''
			} flex items-center  justify-center p-2 h-8 w-8 font-semibold text-xs cursor-pointer border-borderColor border rounded`}
		>
			{children}
		</div>
	);
}

function Table({ header, row, initialState, handleOnChangePage }: TableProps) {
	const {
		handleNext,
		handlePrev,
		handleOnClickPage,
		data,
		isOnFirstPage,
		isOnLastPage,
	} = useTable(initialState);

	const { width } = useWindowDimensions();
	const isLaptop = width <= 1450;

	const DataRow = useCallback(() => {
		return (
			<div className={`contents  text-[15px]"`}>
				{(data || []).map((obj, index: number) => {
					return (
						<div
							className={`${
								isLaptop
									? ' border-borderColor border rounded px-3'
									: 'contents'
							}`}
							key={`row-${index}`}
						>
							{row(obj)}
						</div>
					);
				})}
			</div>
		);
	}, [data, row, isLaptop]);

	return (
		<div
			className={`w-full px-6 ${
				isLaptop ? 'flex flex-row flex-wrap' : 'grid'
			}  gap-x-9 items-center justify-center bg-[#021339] border-borderColor border rounded`}
			style={{
				...(!isLaptop && {
					gridTemplateColumns: `repeat(${header.length},max-content)`,
				}),
			}}
		>
			<div className={`${isLaptop ? 'hidden' : 'contents'}  text-[15px]"`}>
				{header.map((item) => {
					return (
						<div key={`header-${item}`} className="py-[10px] ">
							{item}
						</div>
					);
				})}
			</div>
			{DataRow()}
			<div className="flex items-center border-t justify-between col-span-full py-5">
				<div>
					<p className="p-[10px]">Showing 1 to 5 of 5 users</p>
				</div>
				<div className="flex items-center justify-center gap-2">
					<PaginationButton handleOnClick={handlePrev} disabled={isOnFirstPage}>
						<ChevronLeftIcon className="h-5 w-5" />
					</PaginationButton>

					{Array(5)
						.fill(0)
						.map((_, index) => {
							return (
								<PaginationButton
									handleOnClick={() => handleOnClickPage(index + 1)}
									page={index + 1}
									key={`page-${index + 1}`}
								>
									{index + 1}
								</PaginationButton>
							);
						})}
					<PaginationButton>...</PaginationButton>
					<PaginationButton handleOnClick={handleNext} disabled={isOnLastPage}>
						<ChevronRightIcon className="h-5 w-5" />
					</PaginationButton>
				</div>
			</div>
		</div>
	);
}

export default Table;
