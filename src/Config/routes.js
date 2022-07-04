import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";
import JobsList from "../pages/JobsList/JobsList";
import UserList from "../pages/UserList/UserList";

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
  {
    path: "/Users",
    element: <UserList />,
  },
];

export default routes;