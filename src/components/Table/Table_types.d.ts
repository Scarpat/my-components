
export type ITableColumn = {
    header: string;
    accessor: string;
    isSubmenu?: boolean;
    subcolumns?: ITableColumn[];
    Cell?: (row: any, i: number) => JSX.Element;
    HeaderCell?: (column: any, i: number) => JSX.Element;
  };
  
export type ITableProps = {
    columns: ITableColumn[];
    data: any[];
    totalItems?: number;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    title?: string;
  };