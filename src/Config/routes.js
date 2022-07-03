import Chat from "../components/Chat/Chat";
import Home from "../components/Home/Home";
import JobsList from "../pages/JobsList/JobsList";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
  {
    path: "/Jobs",
    element: <JobsList />,
  },
];

export default routes;