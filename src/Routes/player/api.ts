const BASE_PATH = "https://api-football-v1.p.rapidapi.com/v3";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3116832a61mshafa4befc2da184bp110a55jsn9bd776352651",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

interface IPlayer {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    country: string;
  };
  height: string;
  photo: string;
}

interface IStatistics {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  games: {
    appearences: number;
    position: string;
    rating: string;
  };
  goals: {
    total: number;
    assists: number;
  };
  passes: {
    total: number;
    accuracy: number;
  };
  tackles: {
    total: number;
    blocks: string | null;
    interceptions: string | null;
  };
  dribbles: {
    attempts: number;
    success: number;
  };
  cards: {
    yellow: number;
    yellowred: number;
    red: number;
  };
  penalty: {
    won: number | null;
    scored: number;
    missed: number;
    saved: number | null;
  };
}

interface IPlayerResponse {
  player: IPlayer;
  statistics: IStatistics[];
}

export interface IGetPlayers {
  get: string;
  parameters: {
    league: string;
    search: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: IPlayerResponse[];
  num: number;
  keyword: string;
}

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

export function getLeagues() {
  return fetch(
    "https://api-football-v1.p.rapidapi.com/v3/leagues?country=england",
    options
  ).then((response) => response.json());
}

export function getScorers(num: number) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${num}&season=2022`,
    options
  ).then((response) => response.json());
}

export function getSearchLeague(keyword: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues?search=${keyword}`
  ).then((response) => response.json());
}

export function getSearchTeam(keyword: string) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?search=${keyword}`
  ).then((response) => response.json());
}

export function getSearchPlayer(num: number, keyword: string) {
  return fetch(`${BASE_PATH}/players?league=${num}&search=${keyword}`);
}
