import React, { ReactNode } from "react";

interface TableProps {
  data: Array<Record<string, any>>;
  columns: Array<string>;
  renderHeader?: (column: string) => ReactNode;
  renderCell?: (row: Record<string, any>, column: string) => ReactNode;
}

function Table({ data, columns, renderHeader, renderCell }: TableProps) {
  // const data = [
  //     { id: 1, name: "John", age: 30 },
  //     { id: 2, name: "Jane", age: 25 },
  //     { id: 3, name: "Bob", age: 40 },
  //   ];

  //   const columns = ["id", "name", "age"];
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
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-[#0E1946]" : "bg-[#021339]"}
            >
              {columns.map((column) => (
                <td
                  key={column}
                  className="px-3 first:pl-6 last:pr-6 h-[46px] font-medium text-sm text-white/70 border-t border-borderColor whitespace-nowrap"
                >
                  {renderCell ? renderCell(row, column) : row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
