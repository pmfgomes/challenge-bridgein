import { QueryClient, QueryKey } from "@tanstack/react-query";
import axios from "@/services/axios";

export interface PaginationQueryResponse {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
}

interface DefaultQuery {
  queryKey: QueryKey;
  signal: AbortSignal;
  meta: Record<string, unknown> | undefined;
}

async function defaultQueryFn(args: DefaultQuery) {
  const { queryKey } = args;
  const { data } = await axios.get(`https://free-nba.p.rapidapi.com${queryKey[0]}`, {
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  });

  return data;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false,
    },
  },
});

interface TeamsPaginationParams {
  page: number;
}

export async function fetchTeamsPagination(params: TeamsPaginationParams) {
  const { page } = params;
  const baseUrl = `https://${import.meta.env.VITE_RAPIDAPI_HOST}/teams`;
  const urlParams = new URLSearchParams();
  urlParams.set("page", `${page}`);
  urlParams.set("per_page", "10");

  const { data } = await axios.get(`${baseUrl}?${urlParams.toString()}`);
  return data;
}

export default queryClient;