import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getLeagueStanding, IGetStandings } from "./api";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 100px;
`;

const Col = styled.div`
  width: 80vw;
  height: 100%;
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
  background-color: white;
  color: black;
  padding: 15px;
`;

const StandingBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid white;
  background-color: gray;
  padding: 20px;
`;

const TeamBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  padding-top: 3px;
`;

const Lname = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const Trank = styled.h3`
  width: 5%;
  font-size: 16px;
  text-align: center;
`;

const Tname = styled.h3`
  width: 15%;
  font-size: 16px;
  text-align: center;
`;

const Tall = styled.h3`
  width: 10%;
  font-size: 16px;
  text-align: center;
`;

const Tgoal = styled.h3`
  width: 10%;
  font-size: 16px;
  text-align: center;
`;

const LaligaTeams = () => {
  const navigate = useNavigate();
  const { data: LaLigaData, isLoading } = useQuery<IGetStandings>(
    ["league", "serie"],
    () => getLeagueStanding("140")
  );
  const Response = LaLigaData?.response;
  return (
    <Wrapper>
      <Cols>
        <Col>
          {Response?.map((res) => (
            <Box key={res.league.id}>
              <Lname>{res.league.name}</Lname>
              <StandingBox>
                <TeamBox style={{ marginBottom: "10px" }}>
                  <Trank>Rank</Trank>
                  <Tname>Team</Tname>
                  <Tall>Played</Tall>
                  <Tall>Won</Tall>
                  <Tall>Draw</Tall>
                  <Tall>Loss</Tall>
                  <Tgoal>GF</Tgoal>
                  <Tgoal>GA</Tgoal>
                  <Tgoal>GD</Tgoal>
                  <Tall>Points</Tall>
                </TeamBox>
                {res.league.standings[0].map((team) => (
                  <TeamBox
                    key={team.team.id}
                    style={{
                      borderBottom: "0.1px solid white",
                      cursor: "pointer",
                    }}
                  >
                    <Trank>{team.rank}</Trank>
                    <Tname>{team.team.name}</Tname>
                    <Tall>{team.all.played}</Tall>
                    <Tall>{team.all.win}</Tall>
                    <Tall>{team.all.draw}</Tall>
                    <Tall>{team.all.lose}</Tall>
                    <Tgoal>{team.all.goals.for}</Tgoal>
                    <Tgoal>{team.all.goals.against}</Tgoal>
                    <Tgoal>{team.goalsDiff}</Tgoal>
                    <Tall>{team.points}</Tall>
                  </TeamBox>
                ))}
              </StandingBox>
            </Box>
          ))}
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default LaligaTeams;
