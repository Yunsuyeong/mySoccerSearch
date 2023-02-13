import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import League from "./Routes/League";
import Player from "./Routes/player";
import Scorer from "./Routes/player/score";
import Search from "./Routes/search";
import Team from "./Routes/Team";
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
        path: "/league",
        element: <League />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/player",
        element: <Player />,
      },
      {
        path: "/player/score",
        element: <Scorer />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
