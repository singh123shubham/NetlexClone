import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import MoviesByActor from "./MoviesByActor";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo />,
    },
    {
      path: "/castmovie/:id",
      element: <MoviesByActor />,
    },
    {
      path : "/error",
      element : <ErrorPage/>
    },
    {
      path : "*",
      element : <ErrorPage/>
    }
  ]);

  return (
    <>
      <div className="">
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export default Body;
