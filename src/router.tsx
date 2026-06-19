import { createBrowserRouter } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import Home from "@/pages/Home";
import Archive from "@/pages/Archive";
import Editorial from "@/pages/Editorial";
import Community from "@/pages/Community";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [
      { index: true, element: <Home /> },
      { path: "archive", element: <Archive /> },
      { path: "editorial", element: <Editorial /> },
      { path: "community", element: <Community /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
