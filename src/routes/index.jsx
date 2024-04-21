import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MyNavbar from "../components/Navbar";
import Detail from "../pages/Detail";
import FavoriteMoviesPage from "../pages/FavoriteMoviesPage";
import ToWatchMoviesPage from "../pages/ToWacthMoviesPage";
import SubscribePage from "../pages/SubscribePage";
import Error404 from "../pages/Error404";

const routes = createBrowserRouter([
  {
    element: (
      <>
        <MyNavbar />
        <Outlet />
      </>
    ),
    errorElement: <Error404 />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:movieId",
        element: <Detail />,
      },
      {
        path: "/favorite-movies",
        element: <FavoriteMoviesPage />,
      },
      {
        path: "/to-watch-movies",
        element: <ToWatchMoviesPage />,
      },
      {
        path: "/subscribe",
        element: <SubscribePage />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
