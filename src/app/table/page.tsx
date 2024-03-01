"use client";
import Table from "@/components/Table";
import { ITableColumn } from "@/components/Table/Table_types";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

export default function TablePage() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  console.log(pageSize, page);
  const columns: ITableColumn[] = [
    {
      Header: "#",
      accessor: "",
      Cell(row, i) {
        // The row contains the row information, example:
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
          accessor: "cellphone",
        },
        {
          Header: "Birthday",
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
      <p className="text-lg text-slate-800 my-4">
        Hello everyone, we&apos;re excited to present our new Table component for
        Next.js!
      </p>
      <h1 className="w-full  text-2xl text-blue-900">Overview</h1>
      <p className="text-lg text-slate-800 my-4">
        Our Table component is a flexible and efficient solution for displaying
        data in a tabular format in your Next.js applications. It&apos;s designed
        with customization and scalability in mind, allowing you to present your
        data exactly how you want it.
      </p>
      <h1 className="w-full  text-2xl text-blue-900">Features</h1>
      <p className="text-lg text-slate-800 my-4">
        - <strong>Efficient Rendering</strong>: Our Table component uses
        efficient rendering techniques to ensure smooth performance, even when
        dealing with large datasets.
      </p>
      <p className="text-lg text-slate-800 my-4">
        - <strong>Customizable Columns</strong>: You can easily customize the
        columns of the table, including the header and cell content, width,
        alignment, and more.
      </p>
      <p className="text-lg text-slate-800 my-4">
        - <strong>Sorting and Filtering</strong>: The Table component supports
        sorting and filtering out of the box, providing a seamless user
        experience.
      </p>
      <p className="text-lg text-slate-800 my-4">
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
      />
      <CodeMirror
        value={`export default function PageWithTable(){
            const [page, setPage] = useState(0);
            const [pageSize, setPageSize] = useState(10);

            const columns: ITableColumn[] = [
                {
                    Header: "#",
                    accessor: "",
                    Cell(row, i) {
                      // The row contains the row information, example:
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
      />
            )
        }`}
        
        theme={"dark"}
        height="400px"
      />
      
      
    </div>
  );
}
