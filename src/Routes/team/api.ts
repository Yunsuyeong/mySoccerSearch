const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3116832a61mshafa4befc2da184bp110a55jsn9bd776352651",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

interface ILeague {
  id: number;
  name: string;
  logo: string;
}

interface ICountry {
  name: string;
  code: string;
  flag: string;
}

interface ISeasonResponse {
  league: ILeague;
  country: ICountry;
}

export interface IGetLeagues {
  get: string;
  parameters?: {
    country?: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: ISeasonResponse[];
}

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
}

interface IStandings {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  group: string;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
}

interface IStandingsArray {
  0: IStandings[];
}

interface IStandingResponse {
  league: {
    id: number;
    name: string;
    logo: string;
    standings: IStandingsArray;
  };
}

export interface IGetStandings {
  get: string;
  parameters?: {
    country?: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: IStandingResponse[];
  id: string;
}

export function getLeagues() {
  return fetch(
    "https://api-football-v1.p.rapidapi.com/v3/leagues",
    options
  ).then((response) => response.json());
}

export function getLeagueStanding(id: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=${id}`,
    options
  ).then((response) => response.json());
}

export function getTeams(num: number) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?league=${num}&season=2022`,
    options
  ).then((response) => response.json());
}
