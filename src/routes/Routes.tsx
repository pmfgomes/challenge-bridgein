
import Root from "@/pages/Root";
import { lazy } from "react";
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const Teams = lazy(() => import("@/pages/Teams"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="/teams" element={<Teams />} />
        <Route index element={<Navigate to="/teams" replace />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export default router;