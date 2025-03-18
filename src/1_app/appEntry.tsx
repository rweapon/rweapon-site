import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "@app/providers/AppProvider";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "@app/appRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  </StrictMode>
);
