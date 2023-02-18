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

interface ISeasons {
  start: string;
  end: string;
}

interface ISeasonResponse {
  league: ILeague;
  country: ICountry;
  seasons: ISeasons[];
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
  keyword: string;
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

export function getSearchLeague(keyword: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?search=${keyword}`,
    options
  ).then((response) => response.json());
}

export function getLeagueDetails(id: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${id}`,
    options
  ).then((response) => response.json());
}

export function getLeagueStanding(id: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=${id}`,
    options
  ).then((response) => response.json());
}
