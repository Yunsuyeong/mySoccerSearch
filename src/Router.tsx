import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import Player from "./Routes/player";
import Scorer from "./Routes/player/score";
import Search from "./Routes/search";
import Team from "./Routes/team";
import PremierTeams from "./Routes/team/39";
import LaligaTeams from "./Routes/team/140";
import SerieTeams from "./Routes/team/135";
import BundesTeams from "./Routes/team/78";
import TeamDetail from "./Routes/search/team";
import LeagueDetail from "./Routes/search/league";
import PlayerDetail from "./Routes/search/player";
import Card from "./Routes/player/card";
import LigueTeams from "./Routes/team/61";
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
        element: <PremierTeams />,
      },
      {
        path: "/team/39/:teamId",
        element: <PremierTeams />,
      },
      {
        path: "/team/140",
        element: <LaligaTeams />,
      },
      {
        path: "/team/140/:teamId",
        element: <LaligaTeams />,
      },
      {
        path: "/team/135",
        element: <SerieTeams />,
      },
      {
        path: "/team/135/:teamId",
        element: <SerieTeams />,
      },
      {
        path: "/team/78",
        element: <BundesTeams />,
      },
      {
        path: "/team/78/:teamId",
        element: <BundesTeams />,
      },
      {
        path: "/team/61",
        element: <LigueTeams />,
      },
      {
        path: "/team/61/:teamId",
        element: <LigueTeams />,
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
        path: "/player/card",
        element: <Card />,
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
