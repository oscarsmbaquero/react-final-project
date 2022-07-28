import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";

import UserList from "../pages/User/UserList/UserList";
import FormContact from "../pages/Form/FormContact";
import FormCompanies from "../pages/FormCompanies/FormCompanies";
import FormEmployers from "../pages/FormEmployers/FormEmployers";
import Login from "../pages/User/Login/Login";
import JobsList from "../pages/Jobs/Jobs";
import UserDetails from "../pages/User/UserDetails/UserDetails";
import Profile from "../pages/User/Profile/Profile";
import Register from "../pages/User/Register/Register";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {////en fase de pruebas, revisando 
    path: "/chat/:id",
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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/users/:id",
    element: <UserDetails />,
  },
  {
    path: "/users/register",
    element: <Register />,
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