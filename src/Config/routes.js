import Chat from "../components/Chat/Chat";
import Home from "../components/Home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
];

export default routes;