import BaseLayout from "@app/layouts/BaseLayout";
import { BlackSquare } from "@pages/BlackSquare";
import { ErrorPage } from "@pages/Error";
// import { Home } from "@pages/Home";
import { AppPaths } from "@shared/model/config";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: AppPaths.HOME, element: <BlackSquare /> }],
  },
]);
