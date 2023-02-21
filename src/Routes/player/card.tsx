import styled from "styled-components";
import { useQuery } from "react-query";
import { getCardCollectors, IGetPlayers } from "./api";

const Wrapper = styled.div`
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
  width: 45vw;
  height: 70vh;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  border-bottom: 2px solid black;
  cursor: pointer;
  padding: 10px;
`;

const Ltitle = styled.h1`
  font-size: 28px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const Pname = styled.h3`
  width: 35%;
  font-size: 20px;
  margin-left: 10px;
`;

const Pcard = styled.p`
  width: 30%;
  font-size: 18px;
  margin-left: 20px;
`;

const Pteam = styled.p`
  width: 35%;
  font-size: 18px;
  margin-left: 20px;
`;

const Card = () => {
  const { data, isLoading } = useQuery<IGetPlayers>(
    ["players", "england"],
    () => getCardCollectors(39)
  );
  const { data: spainData } = useQuery<IGetPlayers>(["players", "spain"], () =>
    getCardCollectors(140)
  );
  const { data: italyData } = useQuery<IGetPlayers>(["players", "italy"], () =>
    getCardCollectors(135)
  );
  const { data: germanyData } = useQuery<IGetPlayers>(
    ["players", "germany"],
    () => getCardCollectors(78)
  );
  return (
    <Wrapper>
      <Cols>
        <Col>
          <Ltitle>Premier League</Ltitle>
          {data?.response &&
            data?.response.slice(0, 10).map((player) => (
              <Box key={player.player.id}>
                <Pname>{player.player.name}</Pname>
                <Pcard>
                  {player.statistics[0].cards.red} Reds,{" "}
                  {player.statistics[0].cards.yellow} Yellows
                </Pcard>
                <Pcard>{player.statistics[0].games.appearences} Games</Pcard>
                <Pteam>{player.statistics[0].team.name}</Pteam>
              </Box>
            ))}
        </Col>
        <Col>
          <Ltitle>La Liga</Ltitle>
          {spainData?.response &&
            spainData?.response.slice(0, 10).map((player) => (
              <Box key={player.player.id}>
                <Pname>{player.player.name}</Pname>
                <Pcard>
                  {player.statistics[0].cards.red} Reds,{" "}
                  {player.statistics[0].cards.yellow} Yellows
                </Pcard>
                <Pcard>{player.statistics[0].games.appearences} Games</Pcard>
                <Pteam>{player.statistics[0].team.name}</Pteam>
              </Box>
            ))}
        </Col>
        <Col>
          <Ltitle>Serie A</Ltitle>
          {italyData?.response &&
            italyData?.response.slice(0, 10).map((player) => (
              <Box key={player.player.id}>
                <Pname>{player.player.name}</Pname>
                <Pcard>
                  {player.statistics[0].cards.red} Reds,{" "}
                  {player.statistics[0].cards.yellow} Yellows
                </Pcard>
                <Pcard>{player.statistics[0].games.appearences} Games</Pcard>
                <Pteam>{player.statistics[0].team.name}</Pteam>
              </Box>
            ))}
        </Col>
        <Col>
          <Ltitle>Bundesliga</Ltitle>
          {germanyData?.response &&
            germanyData?.response.slice(0, 10).map((player) => (
              <Box key={player.player.id}>
                <Pname>{player.player.name}</Pname>
                <Pcard>
                  {player.statistics[0].cards.red} Reds,{" "}
                  {player.statistics[0].cards.yellow} Yellows
                </Pcard>
                <Pcard>{player.statistics[0].games.appearences} Games</Pcard>
                <Pteam>{player.statistics[0].team.name}</Pteam>
              </Box>
            ))}
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default Card;
