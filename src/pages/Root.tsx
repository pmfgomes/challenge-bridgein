import AppLayout from "@/components/AppLayout/AppLayout";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader2Icon } from "lucide-react";

export default function Root() {
  return (
    <AppLayout>
      <Suspense fallback={<Loader2Icon className="animate-spin" size={32} />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}
