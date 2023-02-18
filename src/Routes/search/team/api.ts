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
