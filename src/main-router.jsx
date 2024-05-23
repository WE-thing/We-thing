import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/page";

export const routerObj = [
  {
    path: "/",
    element: <HomePage />,
    index: true,
  },
];

const router = createBrowserRouter(routerObj);
export default router;
