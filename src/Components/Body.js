import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import MoviesByActor from "./MoviesByActor";

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
