import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import {
  getTeamsInfo,
  getTeamsSquad,
  getTeamsStats,
  IgetSquads,
  IGetStats,
} from "./api";
import { useState } from "react";
import { IGetLeagues } from "../api";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
`;

const Col = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  color: white;
  padding: 20px;
`;

const TeamBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SquadBox = styled.div`
  position: relative;
  width: 80vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  font-weight: 500;
  background-color: rgba(173, 216, 230, 0.5);
  padding: 20px;
`;

const Tlogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Tname = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const Modebox = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

const Mode = styled.span`
  font-size: 16px;
  cursor: pointer;
`;

const PlayerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Pname = styled.h3`
  font-size: 16px;
  text-align: center;
`;

const Pphoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Page = styled.h3`
  font-size: 16px;
`;

const Pposition = styled.h3`
  font-size: 16px;
  text-align: center;
`;

const TeamDetail = () => {
  const [searchParams, _] = useSearchParams();
  const teamId = searchParams.get("id");
  const { data: SquadData, isLoading } = useQuery<IgetSquads>(
    ["team", "squads"],
    () => getTeamsSquad(teamId!)
  );
  const Response = SquadData?.response[0];
  const { data: TeamData } = useQuery<IGetLeagues>(["league", "team"], () =>
    getTeamsInfo(teamId!)
  );
  const leagueId = TeamData?.response[0].league.id.toString();
  const { data: StatData } = useQuery(["team", "stats"], () =>
    getTeamsStats(leagueId!, teamId!)
  );
  console.log(StatData);
  const [mode, setMode] = useState("standings");
  return (
    <Wrapper
      style={{
        backgroundImage: `url("https://wallpapercave.com/dwp2x/wp9116447.jpg")`,
      }}
    >
      <Cols>
        <Col>
          <Box>
            <TeamBox>
              <Tlogo src={Response?.team.logo} />
              <Tname>{Response?.team.name}</Tname>
              <Modebox>
                <Mode onClick={() => setMode("stats")}>Stats</Mode>
                <Mode onClick={() => setMode("standings")}>Standings</Mode>
              </Modebox>
            </TeamBox>
            {mode === "stats" && (
              <div style={{ display: "flex" }}>
                <SquadBox>
                  <PlayerBox>
                    <Page></Page>
                  </PlayerBox>
                </SquadBox>
              </div>
            )}
            {mode === "standings" && (
              <div style={{ display: "flex" }}>
                <SquadBox>
                  {Response?.players.map((player) => (
                    <PlayerBox key={player.id}>
                      <Pphoto src={player.photo} />
                      <Pname>
                        {player.number}. {player.name}
                      </Pname>
                      <Page>{player.age}</Page>
                      <Pposition>{player.position}</Pposition>
                    </PlayerBox>
                  ))}
                </SquadBox>
              </div>
            )}
          </Box>
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default TeamDetail;
