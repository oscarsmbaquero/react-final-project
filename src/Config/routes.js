import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";
import UserList from "../pages/User/UserList/UserList";
import UserDetails from "../pages/User/UserDetails/UserDetails";
import Form from "../pages/Form/Form";
import JobsList from "../pages/Jobs/JobsList/JobsList";
import JobDetails from "../pages/Jobs/JobDetails/JobDetail";
import Login from "../pages/User/Login";
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
    path: "/users/login",
    element: <Login />,
  },
  {
    path: "/Users",
    element: <UserList />,
  },
  {
    path: "/User/:id",
    element: <UserDetails />,
  },
  {
    path: "/Form",
    element: <Form/>,
  },
];

export default routes;