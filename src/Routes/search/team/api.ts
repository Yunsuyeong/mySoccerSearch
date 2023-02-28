import { StringLiteral } from "typescript";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3116832a61mshafa4befc2da184bp110a55jsn9bd776352651",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  logo: string;
}

interface Ivenue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  image: string;
}

interface ITeamResponse {
  team: ITeam;
  venue: Ivenue;
}

interface ISquads {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

interface ISquadResponse {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  players: ISquads[];
}

export interface IgetTeams {
  get: string;
  parameters: {
    search: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: ITeamResponse[];
  keyword: string;
}

export interface IgetSquads {
  get: string;
  parameters: {
    team: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: ISquadResponse[];
  keyword: string;
}

interface ILeague {
  id: number;
  name: string;
  logo: string;
}

interface ISeasonResponse {
  league: ILeague;
}

export interface IGetLeagues {
  get: string;
  parameters?: {
    team?: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: ISeasonResponse[];
  id: string;
}

interface IStatResponse {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  goals: {
    for: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
    };
    against: {
      total: {
        home: number;
        away: number;
        total: number;
      };
    };
    average: {
      home: string;
      away: string;
      total: string;
    };
  };
  clean_sheet: {
    home: string;
    away: string;
    total: string;
  };
  penalty: {
    scored: {
      total: number;
      percentage: string;
    };
    missed: {
      total: number;
      percentage: string;
    };
    total: number;
  };
  lineups: IStatLineup[];
}

interface IStatLineup {
  formation: string;
  played: number;
}

export interface IGetStats {
  get: string;
  parameters?: {
    league: string;
    season: string;
    team: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: IStatResponse[];
  id: string;
}

export function getSearchTeam(keyword: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?search=${keyword}`,
    options
  ).then((response) => response.json());
}

export function getTeamsSquad(id: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${id}`,
    options
  ).then((response) => response.json());
}

export function getTeamsInfo(id: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?team=${id}`,
    options
  ).then((response) => response.json());
}

export function getTeamsStats(leagueId: string, id: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${leagueId}&season=2022&team=${id}`,
    options
  ).then((response) => response.json());
}
