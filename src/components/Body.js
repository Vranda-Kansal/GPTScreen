import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default Body;
