import React, { ReactNode } from "react";

interface TableProps {
  data: Array<Record<string, any>>;
  dataKeys: Array<string>;
  columns: Array<string>;
  renderHeader?: (column: string) => ReactNode;
  renderCell?: (row: Record<string, any>, column: string) => ReactNode;
  currentPage: number;
  itemsPerPage: number;
}
//E.g Data
// const data = [
//     {
//     ID: "01",
//     Tên: "Cinema An Dương Vương",
//     "Địa chỉ": "47 An Dương Vương, phường 12",
//     "Quận/huyện": "Quận 5",
//     "Tỉnh/Thành phố": "Hồ Chí Minh",
//     "Điện thoại": "096203060",
//     "Tác vụ": "John",
//   },
//   {
//     ID: "01",
//     Tên: "Cinema An Dương Vương",
//     "Địa chỉ": "47 An Dương Vương, phường 12",
//     "Quận/huyện": "Quận 5",
//     "Tỉnh/Thành phố": "Hồ Chí Minh",
//     "Điện thoại": "096203060",
//     "Tác vụ": "John",
//   },
//   {
//     ID: "01",
//     Tên: "Cinema An Dương Vương",
//     "Địa chỉ": "47 An Dương Vương, phường 12",
//     "Quận/huyện": "Quận 5",
//     "Tỉnh/Thành phố": "Hồ Chí Minh",
//     "Điện thoại": "096203060",
//     "Tác vụ": "John",
//   },
//   ];

//   const columns = [  "ID", "Tên", "Địa chỉ", "Quận/huyện", "Tỉnh/Thành phố", "Điện thoại", "Tác vụ",];

//E.g Case Study
//   <Table
//   data={data}
//   columns={columns}
//   renderHeader={(column) => (
//     <span className="header-cell">{column}</span>
//   )}
//   renderCell={(row, column) => (
//     <span className="data-cell">{row[column]}</span>
//   )}
//   currentPage={currentPage}
//   itemsPerPage={itemsPerPage}
//   />
//   <Pagination pageCount={pageCount} onPageChange={handlePageChange} />

function Table({
  data,
  columns,
  renderHeader,
  renderCell,
  currentPage,
  itemsPerPage,
  dataKeys,
}: TableProps) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);
  return (
    <div className="min-w-full rounded border border-borderColor overflow-hidden">
      <table className="min-w-full ">
        <thead className="h-14">
          <tr className="bg-bgPrimary">
            {columns.map((column) => (
              <th
                key={column}
                className="text-left text-sm font-bold text-white tracking-wider px-3 first:pl-6 last:pr-6"
              >
                {renderHeader ? renderHeader(column) : column}
              </th>
            ))}
            <th className="text-left text-sm font-bold text-white tracking-wider px-3 first:pl-6 last:pr-6">
              Tác vụ
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-[#0E1946]" : "bg-[#021339]"}
            >
              {dataKeys.map((dataKey) => (
                <td
                  key={dataKey}
                  className=" max-w-[200px] overflow-x-scroll container-snap px-3 first:pl-6 last:pr-6 h-[46px] font-medium text-sm text-white/70 border-t border-borderColor whitespace-nowrap"
                >
                  {renderCell ? renderCell(row, dataKey) : row[dataKey]}
                </td>
              ))}
              <td
                key={rowIndex}
                className=" max-w-[200px] overflow-x-scroll container-snap px-3 first:pl-6 last:pr-6 h-[46px] font-medium text-sm text-white/70 border-t border-borderColor whitespace-nowrap"
              >
                ...
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
