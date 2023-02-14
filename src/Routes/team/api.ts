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

export function getTeams(num: number) {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?league=${num}&season=2022`,
    options
  ).then((response) => response.json());
}
