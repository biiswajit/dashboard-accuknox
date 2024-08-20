import { createBrowserRouter } from "react-router-dom";
import { Home, Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

export default router;