import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";

import UserList from "../pages/User/UserList/UserList";
import FormContact from "../pages/Form/FormContact";
import FormCompanies from "../pages/FormCompanies/FormCompanies";
import FormEmployers from "../pages/FormEmployers/FormEmployers";
import Login from "../pages/User/Login";
import JobsList from "../pages/Jobs/Jobs";

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
    path: "/users/login",
    element: <Login />,
  },
  {
    path: "/Users",
    element: <UserList />,
  },
  // {
  //   path: "/User/:id",
  //   element: <UserDetails />,
  // },
  {
    path: "/FormContact",
    element: <FormContact />,
  },
  {
    path: "/FormCompanies",
    element: <FormCompanies />,
  },
  {
    path: "/FormEmployers",
    element: <FormEmployers />,
  },
];

export default routes;