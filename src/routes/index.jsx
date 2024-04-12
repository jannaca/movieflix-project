import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Detail from "../pages/Detail";
import WatchedMoviesPage from "../pages/WatchedMoviesPage";
import ToWatchMoviesPage from "../pages/ToWacthMoviesPage";
import SubscribePage from "../pages/SubscribePage"
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),errorElement: <Error404/>,
    
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
        path: "/watched-movies",
        element: <WatchedMoviesPage/>,
      },
      {
        path: "/to-watch-movies",
        element: <ToWatchMoviesPage />,
      },
      {
        path: "/subscribe",
        element: <SubscribePage />,
      }
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
