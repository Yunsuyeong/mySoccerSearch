import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import Search from "./Routes/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
