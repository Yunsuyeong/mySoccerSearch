import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import Player from "./Routes/player";
import Search from "./Routes/search";
import Team from "./Routes/team";
import TeamDetail from "./Routes/search/team";
import LeagueDetail from "./Routes/search/league";
import PlayerDetail from "./Routes/search/player";
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
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team/39",
        element: <Team />,
      },
      {
        path: "/team/39/:teamId",
        element: <Team />,
      },
      {
        path: "/team/140",
        element: <Team />,
      },
      {
        path: "/team/140/:teamId",
        element: <Team />,
      },
      {
        path: "/team/135",
        element: <Team />,
      },
      {
        path: "/team/135/:teamId",
        element: <Team />,
      },
      {
        path: "/team/78",
        element: <Team />,
      },
      {
        path: "/team/78/:teamId",
        element: <Team />,
      },
      {
        path: "/team/61",
        element: <Team />,
      },
      {
        path: "/team/61/:teamId",
        element: <Team />,
      },
      {
        path: "/player",
        element: <Player />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/search/league",
        element: <LeagueDetail />,
      },
      {
        path: "/search/league/:leagueId",
        element: <LeagueDetail />,
      },
      {
        path: "/search/team",
        element: <TeamDetail />,
      },
      {
        path: "/search/team/:teamId",
        element: <TeamDetail />,
      },
      {
        path: "/search/player",
        element: <PlayerDetail />,
      },
      {
        path: "/search/player/:playerId",
        element: <PlayerDetail />,
      },
    ],
  },
]);

export default router;
