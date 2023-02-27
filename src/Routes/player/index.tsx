import styled from "styled-components";
import { useQuery } from "react-query";
import { getCardCollectors, getScorers, IGetPlayers } from "./api";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
  background-size: cover;
  background-position: center center;
`;

const Cols = styled.div`
  position: relative;
  top: 100px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

const Col = styled.div`
  width: 45vw;
  height: 80vh;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  background-color: rgba(144, 238, 144, 0.5);
  padding: 10px;
  :hover {
    font-weight: bold;
  }
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
  text-align: center;
`;

const Pscore = styled.p`
  width: 30%;
  font-size: 18px;
  text-align: center;
`;

const Pcard = styled.p`
  width: 30%;
  font-size: 18px;
  text-align: center;
`;

const Pteam = styled.p`
  width: 35%;
  font-size: 18px;
  text-align: center;
`;

const Select = styled.select`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #444;
  background-color: #fff;
  padding: 0.6em 1.4em 0.5em 0.8em;
  margin: 0;
  border: 1px solid #aaa;
  border-radius: 0.5em;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
`;

const Player = () => {
  const { data, isLoading } = useQuery<IGetPlayers>(
    ["players", "england"],
    () => getScorers(39)
  );
  const { data: spainData } = useQuery<IGetPlayers>(["players", "spain"], () =>
    getScorers(140)
  );
  const { data: italyData } = useQuery<IGetPlayers>(["players", "italy"], () =>
    getScorers(135)
  );
  const { data: germanyData } = useQuery<IGetPlayers>(
    ["players", "germany"],
    () => getScorers(78)
  );
  const { data: englandCardData } = useQuery<IGetPlayers>(
    ["players", "england"],
    () => getCardCollectors(39)
  );
  const { data: spainCardData } = useQuery<IGetPlayers>(
    ["players", "spain"],
    () => getCardCollectors(140)
  );
  const { data: italyCardData } = useQuery<IGetPlayers>(
    ["players", "italy"],
    () => getCardCollectors(135)
  );
  const { data: germanyCardData } = useQuery<IGetPlayers>(
    ["players", "germany"],
    () => getCardCollectors(78)
  );
  const [category, setCategory] = useState("scorer");
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, gray, transparent),
                      url("https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg")`,
      }}
    >
      <Cols
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Select onChange={(e) => setCategory(e.target.value)}>
          <option value="Scorer">Top Scorer</option>
          <option value="card">Top Card</option>
        </Select>
      </Cols>
      <Cols>
        {category === "scorer" && (
          <>
            <Col>
              <Ltitle>Premier League</Ltitle>
              {data?.response &&
                data?.response.slice(0, 10).map((player) => (
                  <Box key={player.player.id}>
                    <Pname>{player.player.name}</Pname>
                    <Pscore>
                      {player.statistics[0].goals.total} Goals{" "}
                      {player.statistics[0].games.appearences} Games
                    </Pscore>
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
                    <Pscore>
                      {player.statistics[0].goals.total} Goals{" "}
                      {player.statistics[0].games.appearences} Games
                    </Pscore>
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
                    <Pscore>
                      {player.statistics[0].goals.total} Goals{" "}
                      {player.statistics[0].games.appearences} Games
                    </Pscore>
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
                    <Pscore>
                      {player.statistics[0].goals.total} Goals{" "}
                      {player.statistics[0].games.appearences} Games
                    </Pscore>
                    <Pteam>{player.statistics[0].team.name}</Pteam>
                  </Box>
                ))}
            </Col>
          </>
        )}
        {category === "card" && (
          <>
            <Col>
              <Ltitle>Premier League</Ltitle>
              {englandCardData?.response &&
                englandCardData?.response.slice(0, 10).map((player) => (
                  <Box key={player.player.id}>
                    <Pname>{player.player.name}</Pname>
                    <Pcard>
                      {player.statistics[0].cards.red} Reds,{" "}
                      {player.statistics[0].cards.yellow} Yellows
                    </Pcard>
                    <Pcard>
                      {player.statistics[0].games.appearences} Games
                    </Pcard>
                    <Pteam>{player.statistics[0].team.name}</Pteam>
                  </Box>
                ))}
            </Col>
            <Col>
              <Ltitle>La Liga</Ltitle>
              {spainCardData?.response &&
                spainCardData?.response.slice(0, 10).map((player) => (
                  <Box key={player.player.id}>
                    <Pname>{player.player.name}</Pname>
                    <Pcard>
                      {player.statistics[0].cards.red} Reds,{" "}
                      {player.statistics[0].cards.yellow} Yellows
                    </Pcard>
                    <Pcard>
                      {player.statistics[0].games.appearences} Games
                    </Pcard>
                    <Pteam>{player.statistics[0].team.name}</Pteam>
                  </Box>
                ))}
            </Col>
            <Col>
              <Ltitle>Serie A</Ltitle>
              {italyCardData?.response &&
                italyCardData?.response.slice(0, 10).map((player) => (
                  <Box key={player.player.id}>
                    <Pname>{player.player.name}</Pname>
                    <Pcard>
                      {player.statistics[0].cards.red} Reds,{" "}
                      {player.statistics[0].cards.yellow} Yellows
                    </Pcard>
                    <Pcard>
                      {player.statistics[0].games.appearences} Games
                    </Pcard>
                    <Pteam>{player.statistics[0].team.name}</Pteam>
                  </Box>
                ))}
            </Col>
            <Col>
              <Ltitle>Bundesliga</Ltitle>
              {germanyCardData?.response &&
                germanyCardData?.response.slice(0, 10).map((player) => (
                  <Box key={player.player.id}>
                    <Pname>{player.player.name}</Pname>
                    <Pcard>
                      {player.statistics[0].cards.red} Reds,{" "}
                      {player.statistics[0].cards.yellow} Yellows
                    </Pcard>
                    <Pcard>
                      {player.statistics[0].games.appearences} Games
                    </Pcard>
                    <Pteam>{player.statistics[0].team.name}</Pteam>
                  </Box>
                ))}
            </Col>
          </>
        )}
      </Cols>
    </Wrapper>
  );
};

export default Player;
