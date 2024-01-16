import type { DataTableProps } from "./DataTable";
import DataTable from "./DataTable";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import Button from "@/components/lib/Button/Button";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import type { PaginationState, Updater } from "@tanstack/react-table";

export interface DataTableWithPaginationProps<TData, TValue> extends DataTableProps<TData, TValue> {
  pageCount: number;
  onPageChange?: (args: Updater<PaginationState>) => void;
  loading?: boolean;
}

export default function DataTableWithPagination<TData, TValue>(props: DataTableWithPaginationProps<TData, TValue>) {
  const { columns, data, pageCount, onPageChange, loading } = props;

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });

  const handlePagination = (args: Updater<PaginationState>) => {
    if (onPageChange) onPageChange(args);

    setPagination(args);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: pageCount + 1 ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: handlePagination,
    manualPagination: true,
  });

  const currentPage = table.getState().pagination.pageIndex;
  const tablePageCount = table.getPageCount() - 1;

  const handleNextPage = () => {
    if (currentPage >= pageCount) return;
    table.nextPage();
  };

  return (
    <div className="flex flex-col gap-2">
      <DataTable columns={columns} data={data} table={table} loading={loading} />
      <div className="flex justify-end  items-center space-x-2">
        <span className="flex items-center gap-1">
          {!!tablePageCount && (
            <>
              <div>
                Page {currentPage} of {tablePageCount}
              </div>
              {loading && <span>(Loading...)</span>}
            </>
          )}
        </span>
        <Button
          variant="outline"
          className="hidden h-10 w-10 p-0 lg:flex"
          onClick={() => table.setPageIndex(1)}
          disabled={currentPage < 2 || loading}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-10 w-10 p-0"
          onClick={() => table.previousPage()}
          disabled={currentPage < 2 || loading}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-10 w-10 p-0"
          onClick={handleNextPage}
          disabled={currentPage >= tablePageCount || loading}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-10 w-10 p-0 lg:flex"
          onClick={() => table.setPageIndex(tablePageCount)}
          disabled={currentPage >= tablePageCount || loading}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

