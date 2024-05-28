import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import InvitationCreatePage from "./routes/InvitationCreatePage";
import InvitationPage from "./routes/InvitationPage";

export const routerObj = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/create",
    element: <InvitationCreatePage />,
  },
  {
    path: "/invitations/:id",
    element: <InvitationPage />,
  },
];

const router = createBrowserRouter(routerObj);
export default router;
