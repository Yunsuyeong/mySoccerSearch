import styled from "styled-components";
import { useQuery } from "react-query";
import {
  getEnglandScorers,
  getGermanyScorers,
  getItalyScorers,
  getSpainScorers,
  IGetPlayers,
} from "../../api";

const Banner = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
`;

const Col = styled.div`
  width: 40vw;
  height: 80vh;
  padding: 10px;
  margin-bottom: 30px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  border-bottom: 2px solid black;
  cursor: pointer;
  padding: 15px;
`;

const Ltitle = styled.h1`
  font-size: 28px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const Pname = styled.h3`
  width: 35%;
  font-size: 24px;
  margin-left: 10px;
`;

const Pscore = styled.p`
  width: 35%;
  font-size: 18px;
  margin-left: 20px;
`;

const PTeam = styled.p`
  width: 30%;
  font-size: 18px;
  margin-left: 20px;
`;

const Scorer = () => {
  const { data, isLoading } = useQuery<IGetPlayers>(
    ["players", "england"],
    getEnglandScorers
  );
  const { data: spainData, isLoading: isLoading2 } = useQuery<IGetPlayers>(
    ["players", "spain"],
    getSpainScorers
  );
  const { data: italyData, isLoading: isLoading3 } = useQuery<IGetPlayers>(
    ["players", "italy"],
    getItalyScorers
  );
  const { data: germanyData, isLoading: isLoading4 } = useQuery<IGetPlayers>(
    ["players", "germany"],
    getGermanyScorers
  );
  return (
    <Banner>
      <Cols>
        <Col>
          <Ltitle>Premier League</Ltitle>
          {data?.response.slice(0, 10).map((player) => (
            <Box key={player.player.id}>
              <Pname>{player.player.name}</Pname>
              <Pscore>
                {player.statistics[0].goals.total} Goals{" "}
                {player.statistics[0].games.appearences} Games
              </Pscore>
              <PTeam>{player.statistics[0].team.name}</PTeam>
            </Box>
          ))}
        </Col>
        <Col>
          <Ltitle>La Liga</Ltitle>
          {spainData?.response.slice(0, 10).map((player) => (
            <Box key={player.player.id}>
              <Pname>{player.player.name}</Pname>
              <Pscore>
                {player.statistics[0].goals.total} Goals{" "}
                {player.statistics[0].games.appearences} Games
              </Pscore>
              <PTeam>{player.statistics[0].team.name}</PTeam>
            </Box>
          ))}
        </Col>
        <Col>
          <Ltitle>Serie A</Ltitle>
          {italyData?.response.slice(0, 10).map((player) => (
            <Box key={player.player.id}>
              <Pname>{player.player.name}</Pname>
              <Pscore>
                {player.statistics[0].goals.total} Goals{" "}
                {player.statistics[0].games.appearences} Games
              </Pscore>
              <PTeam>{player.statistics[0].team.name}</PTeam>
            </Box>
          ))}
        </Col>
        <Col>
          <Ltitle>Bundesliga</Ltitle>
          {germanyData?.response.slice(0, 10).map((player) => (
            <Box key={player.player.id}>
              <Pname>{player.player.name}</Pname>
              <Pscore>
                {player.statistics[0].goals.total} Goals{" "}
                {player.statistics[0].games.appearences} Games
              </Pscore>
              <PTeam>{player.statistics[0].team.name}</PTeam>
            </Box>
          ))}
        </Col>
      </Cols>
    </Banner>
  );
};

export default Scorer;
