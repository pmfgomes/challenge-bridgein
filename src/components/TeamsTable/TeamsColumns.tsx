import { ColumnDef } from "@tanstack/react-table";

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export const columns: ColumnDef<Team>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "full_name",
    header: "Full Name",
  },
  {
    accessorKey: "division",
    header: "Division",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "conference",
    header: "Conference",
  },
];
