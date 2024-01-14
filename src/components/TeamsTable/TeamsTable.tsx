import { Team, columns } from "@/components/TeamsTable/TeamsColumns";
import DataTable from "@/components/lib/DataTable/DataTable";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/components/lib/LoadingSpinner/LoadingSpinner";
import type { PaginationQueryResponse } from "@/utils/queries";

interface TeamsQueryResponse {
  data: Team[];
  meta: PaginationQueryResponse;
}

export default function TeamsTable() {
  const { data, error, isFetching, isSuccess } = useQuery<TeamsQueryResponse>({ queryKey: ["/teams"] });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return <div className="mx-auto py-10">{isSuccess && <DataTable columns={columns} data={data.data} />}</div>;
}
