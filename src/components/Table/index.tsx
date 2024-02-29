import { useEffect, useState } from "react";
import { ITableProps } from "./Table_types";


const Table = ({
  columns,
  data,
  title = "Itens por página:  ",
  totalItems = 10,
  onPageChange,
  onPageSizeChange,
}: ITableProps) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleRowSelection = (rowIndex: number) => {
    const isSelected = selectedRows.includes(rowIndex);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const toggleAllRowsSelection = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      const allRowIndices = Array.from(Array(data.length).keys());
      setSelectedRows(allRowIndices);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(0);
    if (onPageSizeChange) onPageSizeChange(newItemsPerPage);
  };

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      setCurrentPage(page);
      onPageChange(page * itemsPerPage);
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageRange = 1; // Definir a quantidade de páginas adjacentes que deseja mostrar

  const renderPageNumbers = () => {
    let pageNumbers = [];
    let startPage = Math.max(1, currentPage - pageRange);
    let endPage = Math.min(totalPages, currentPage + pageRange);

    if (currentPage - pageRange > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(0)}
          className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center border border-gray-300 rounded font-bold"
        >
          1
        </button>
      );
      if (currentPage - pageRange > 2) {
        pageNumbers.push(<span key={-1}>...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i - 1)}
          className={`h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center border border-gray-300 rounded font-bold ${
            i - 1 === currentPage ? "text-white bg-contrast-blue" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    if (currentPage + pageRange < totalPages) {
      if (currentPage + pageRange < totalPages - 1) {
        pageNumbers.push(<span key={-2}>...</span>);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages - 1)}
          className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center border border-gray-300 rounded font-bold"
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  const currentData = data;

  return (
    <div
      style={{
        boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.3)",
        tableLayout: "auto",
      }}
      className="w-full text-left rounded-xl mb-10  bg-white"
    >
      <div className="w-full overflow-auto">
        <table className={" overflow-auto w-max min-w-full" }>
          <thead className="w-fit">
            <tr>
              {columns.map((column, columnIndex) => (
                <th
                  key={columnIndex}
                  className={` border-x  border-gray-200 font-bold w-fit text-center h-full ${
                    column.accessor === "checkbox" ? "w-4" : ""
                  }`}
                >
                  <div className="flex flex-col h-full">
                  <p className="p-3">
                  {column.Header}
                  </p>
                  {column.accessor === "checkbox" && (
                    <input
                      type="checkbox"
                      className="h-6 w-6 ml-3 mt-3 "
                      checked={selectedRows.length === data.length}
                      onChange={toggleAllRowsSelection}
                    />
                  )}
                  {column.isSubmenu && column.subcolumns && (
                    <div 
                    style={{gridTemplateColumns: `repeat(${column.subcolumns.length}, 1fr)`}}
                    className={`grid `}>
                      {column.subcolumns.map((subcolumn, subcolumnIndex) => (
                        <div
                          key={subcolumnIndex}
                          className={"border-t border-gray-200 flex flex-col w-full"  + (  subcolumnIndex +1  !== column.subcolumns?.length  && ' border-r')}
                        >
                          <p className="mx-3">
                          {subcolumn.Header}
                          </p>
                          {subcolumn.isSubmenu && subcolumn.subcolumns && (
                            <div className={`grid grid-cols-${subcolumn.subcolumns.length}`}>
                              {subcolumn.subcolumns.map(
                                (subsubcolumn, subsubcolumnIndex) => (
                                  <div
                                    key={subsubcolumnIndex}
                                    className={"flex border-t border-gray-200 justify-evenly w-full" + (  subsubcolumnIndex +1  !== subcolumn.subcolumns?.length  && ' border-r')}
                                  >
                                  <p className="mx-3">
                                    {subsubcolumn.Header}
                                  </p>
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="w-full pt-4">
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className="w-fit">
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className={`px-3 py-2 border-t-2 border-gray-200 w-fit text-center ${
                      rowIndex % 2 ? "bg-white" : "bg-gray-100"
                    }`}
                  >
                    {column.accessor === "checkbox" ? (
                      <input
                        type="checkbox"
                        className="h-6 w-6 ml-3 mt-3"
                        checked={selectedRows.includes(rowIndex)}
                        onChange={() => toggleRowSelection(rowIndex)}
                      />
                    ) : column.isSubmenu && column.subcolumns ? (
                      <div
                    style={{gridTemplateColumns: `repeat(${column.subcolumns.length}, 1fr)`}}
                        className={`grid`}
                      >
                        {column.subcolumns.map((subcolumn, subcolumnIndex) => (
                          <>
                            {subcolumn.isSubmenu && subcolumn.subcolumns ? (
                              <div
                                style={{gridTemplateColumns: `repeat(${subcolumn.subcolumns.length}, 1fr)`}}
                                className={`grid`}
                              >
                                {subcolumn.subcolumns.map(
                                  (subsubcolumn, subsubcolumnIndex) => (
                                    <div key={subsubcolumnIndex}>
                                      {row[subsubcolumn.accessor] ?? (
                                        <div className="" />
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            ) : (
                              <div key={subcolumnIndex}>
                                {row[subcolumn.accessor]}
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    ) : column.Cell ? (
                      column.Cell({ row }, rowIndex)
                    ) : (
                      row[column.accessor]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center flex-col-reverse w-full gap-3 sm:flex-row sm:justify-between p-4 border-t border-gray-200">
        <div>
          {title}
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="ml-2"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="flex gap-3 ">
          <button
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage === 0}
            className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center border border-gray-300 rounded"
          >
            {"<"}
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center border border-gray-300 rounded"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
