import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";

import UserList from "../pages/User/UserList/UserList";
import FormContact from "../pages/Form/FormContact";
import FormCompanies from "../pages/FormCompanies/FormCompanies";
import FormEmployers from "../pages/FormEmployers/FormEmployers";
import Login from "../pages/User/Login";
import JobsList from "../pages/Jobs/Jobs";
import UserDetails from "../pages/User/UserDetails/UserDetails";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/jobs",
    element: <JobsList />,
  },
  {
    path: "/users/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/users/:id",
    element: <UserDetails />,
  },
  {
    path: "/formContact",
    element: <FormContact />,
  },
  {
    path: "/formCompanies",
    element: <FormCompanies />,
  },
  {
    path: "/formEmployers",
    element: <FormEmployers />,
  },
];

export default routes;