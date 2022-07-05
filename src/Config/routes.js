import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";
import JobsList from "../pages/JobsList/JobsList";
import UserList from "../pages/UserList/UserList";
import JobDetails from "../pages/JobDetails/JobDetail";
import UserDetails from "../pages/UserDetails/UserDetails";

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
    path: "/Jobs/:id",
    element: <JobDetails />,
  },
  {
    path: "/Users",
    element: <UserList />,
  },
  {
    path: "/User/:id",
    element: <UserDetails />,
  },
];

export default routes;