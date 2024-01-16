import { Team, columns } from "@/components/TeamsTable/TeamsColumns";
import DataTableWithPagination from "@/components/lib/DataTable/DataTableWithPagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchTeamsPagination, type PaginationQueryResponse } from "@/services/queries";
import { useState } from "react";
import type { PaginationState } from "@tanstack/react-table";

interface TeamsQueryResponse {
  data: Team[];
  meta: PaginationQueryResponse;
}

export default function TeamsTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });

  const { data, error, isFetching } = useQuery<TeamsQueryResponse>({
    queryKey: ["/teams", pagination.pageIndex],
    queryFn: () => fetchTeamsPagination({ page: pagination.pageIndex }),
    placeholderData: keepPreviousData,
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="mx-auto">
      <DataTableWithPagination
        columns={columns}
        data={data?.data || []}
        pageCount={data?.meta?.total_pages ?? 0}
        onPageChange={setPagination}
        loading={isFetching}
      />
    </div>
  );
}

