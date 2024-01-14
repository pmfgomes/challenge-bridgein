import { QueryKey } from "@tanstack/react-query";
import axios from "axios";

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

export async function defaultQueryFn(args: DefaultQuery) {
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
