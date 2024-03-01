"use client";
import Table from "@/components/Table";
import { ITableColumn } from "@/components/Table/Table_types";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { IoPeopleSharp } from "react-icons/io5";

export default function TablePage() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const columns: ITableColumn[] = [
    {
      header: "#",
      accessor: "",
      HeaderCell() {
        return (
          <div className="flex items-center text-blue-900 justify-center w-full">
            <IoPeopleSharp size={32} />
          </div>
        );
      },
      Cell(row, i) {
        // The row contains the row information, example: row.row.name; row.row.cellphone
        // the i is the index of the row in this page
        return <p>{i + 1 + pageSize * page}</p>;
      },
    },
    {
      accessor: "name",
      header: "Name",
    },
    {
      header: "User Informations ",
      accessor: "",
      isSubmenu: true,
      subcolumns: [
        {
          header: "Cellphone",
          accessor: "cellphone",
        },
        {
          header: "Birthday",
          accessor: "birthday",
        },
      ],
    },
  ];

  const data = [
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
    { name: "John", cellphone: "+1 123 4567890", birthday: "02-22-2000" },
  ];

  return (
    <div className="w-10/12 bg-white m-auto my-[7.5%] h-fit min-h-[70%] rounded-xl shadow-lg  p-10">
      <h1 className="w-full  text-4xl text-blue-900">
        Introducing Our Next.js Table Component
      </h1>
      <p className="text-lg text-slate-800 my-4 text-justify">
        Hello everyone, we&apos;re excited to present our new Table component
        for Next.js!
      </p>
      <h1 className="w-full  text-2xl text-blue-900">Overview</h1>
      <p className="text-lg text-slate-800 my-4 text-justify">
        Our Table component is a flexible and efficient solution for displaying
        data in a tabular format in your Next.js applications. It&apos;s
        designed with customization and scalability in mind, allowing you to
        present your data exactly how you want it.
      </p>
      <h1 className="w-full  text-2xl text-blue-900">Features</h1>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Efficient Rendering</strong>: Our Table component uses
        efficient rendering techniques to ensure smooth performance, even when
        dealing with large datasets.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Customizable Columns</strong>: You can easily customize the
        columns of the table, including the header and cell content, width,
        alignment, and more.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Sorting and Filtering</strong>: The Table component supports
        sorting and filtering out of the box, providing a seamless user
        experience.
      </p>
      <p className="text-lg text-slate-800 my-4 text-justify">
        - <strong>Responsive Design</strong>: The Table component is responsive,
        ensuring it looks great on devices of all sizes.
      </p>
      <h1 className="w-full  text-2xl text-blue-900 my-5">Examples</h1>
      <Table
        columns={columns}
        data={data.slice(pageSize * page, pageSize * (page + 1))}
        totalItems={data.length}
        onPageChange={(pageNumber) => {
          setPage(pageNumber);
        }}
        onPageSizeChange={(pageSize) => {
          setPageSize(pageSize);
        }}
        pageSizes={[10, 20, 50]}
      />
      <CodeMirror
        value={`export default function PageWithTable(){
            const [page, setPage] = useState(0);
            const [pageSize, setPageSize] = useState(10);

            const columns: ITableColumn[] = [
              {
                header: "#",
                accessor: "",
                HeaderCell() {
                  return (
                    <div className="flex items-center text-blue-900 justify-center w-full">
                      <IoPeopleSharp size={32} />
                    </div>
                  );
                },
                Cell(row, i) {
                  // The row contains the row information, example: row.row.name; row.row.cellphone
                  // the i is the index of the row in this page
                  return <p>{i + 1 + pageSize * page}</p>;
                },
              },
                {
                    accessor: "name",
                    Header: "Name",
                },
                {
                    Header: "User Informations ",
                    accessor: "",
                    isSubmenu: true,
                    subcolumns: [
                        {
                            Header: "Cellphone",
                            accessor: "cellphone"
                        },
                        {
                            Header: "Birthday",
                            accessor: "birthday"
                        },
                    ]
                },
            ]

            const data = [
                {name: 'John', cellphone: '+1 123 4567890', birthday: '02-22-2000'},
                ...
            ]

            return (
                <Table
        columns={columns}
        data={data.slice(pageSize * page, pageSize * (page + 1))}
        totalItems={data.length}
        onPageChange={(pageNumber) => {
          setPage(pageNumber);
        }}
        onPageSizeChange={(pageSize) => {
          setPageSize(pageSize);
        }}
        pageSizes={[10,20,50]}
      />
            )
        }`}
        theme={"dark"}
        height="400px"
      />
      <div className="w-full min-w-60 overflow-auto">
        <table className="w-max min-w-full mt-10 border border-blue-800">
          <thead>
            <tr>
              <th className="border border-blue-800 p-2">Table Properties</th>
              <th className="border border-blue-800 p-2">Descriptions</th>
            </tr>
          </thead>
          <tr>
            <td className="border border-blue-800 p-2">columns</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                ITableColumn[] - Defines the headers and information seen in the
                table
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">data</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                any[] - The data that will be displayed in the table
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">totalItems</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                number - Total number of data to render paginations
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">onPageChange</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                {
                  "(page: number) => void - Function that informs the current page"
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">onPageSizeChange</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                {
                  "(size: number) => void - Function that informs the current size of the table"
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">itemsPerPageTitle</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                string
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">pageSizes</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700  bg-gray-200 w-fit px-5 rounded-full">
                number[] - By default [5, 10, 20]
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div className="w-full min-w-60 overflow-auto">
        <table className="w-max min-w-full mt-10 border border-blue-800">
          <thead>
            <tr>
              <th className="border border-blue-800 p-2">Column Properties</th>
              <th className="border border-blue-800 p-2">Descriptions</th>
            </tr>
          </thead>
          <tr>
            <td className="border border-blue-800 p-2">header</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                string - Sets the column header
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">accessor</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                string - Defines the key of the object from which the column
                will take value
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">isSubmenu</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                boolean - Defines whether to render submenus
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">subcolumns</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                ITableColumn[] - Defines the subcolumns
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">Cell</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                {
                  "(row: any, i: number) => JSX.Element; - Function to render custom columns"
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-blue-800 p-2">HeaderCell</td>
            <td className="border border-blue-800 p-2">
              <p className="text-md text-gray-700 bg-gray-200 w-fit px-5 rounded-full">
                {
                  "(column: any, i: number) => JSX.Element; - Function to render custom header"
                }
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
