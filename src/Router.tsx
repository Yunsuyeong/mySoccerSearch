import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import SearchLeague from "./Routes/search/league";
import SearchTeam from "./Routes/search/team";
import SearchPlayer from "./Routes/search/player";

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
        path: "/search/league",
        element: <SearchLeague />,
      },
      {
        path: "/search/team",
        element: <SearchTeam />,
      },
      {
        path: "/search/player",
        element: <SearchPlayer />,
      },
    ],
  },
]);

export default router;
