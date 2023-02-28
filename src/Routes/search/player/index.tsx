import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getSearchPlayer, IGetPlayers } from "./api";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
`;

const Cols = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Col = styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  color: white;
  padding: 20px;
`;

const PlayersBox = styled.div`
  position: relative;
  height: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(245, 218, 223, 0.5);
  padding: 20px;
`;

const PlayerBox = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;
`;

const Pname = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const Pphoto = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const Pbirth = styled.h3`
  font-size: 24px;
`;

const PWeight = styled.h3`
  font-size: 24px;
`;

const Tname = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const Tphoto = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const Tleague = styled.h3`
  font-size: 20px;
`;

const DetailsBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background-color: transparent;
  padding: 10px;
`;

const DetailBox = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const StatBox = styled.div`
  width: 100%;
  display: flex;
  font-weight: 500;
  background-color: transparent;
  border-bottom: 0.5px solid white;
  padding: 5px;
`;

const Pstats = styled.h3`
  width: 50%;
  font-size: 16px;
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

const PlayerDetail = () => {
  const [category, setCategory] = useState("attack");
  const [searchParams, _] = useSearchParams();
  const playerId = searchParams.get("id");
  const playerName = searchParams.get("name");
  const { data: DetailData, isLoading } = useQuery<IGetPlayers>(
    ["player", "detail"],
    () => getSearchPlayer(playerId!, playerName!)
  );
  const Response = DetailData?.response;
  return (
    <Wrapper
      style={{
        backgroundImage: `url("https://wallpapercave.com/dwp2x/wp9116447.jpg")`,
      }}
    >
      <Cols>
        <Col>
          {Response?.map((res) => (
            <Box>
              <PlayersBox style={{ width: "30%" }}>
                <PlayerBox>
                  <Pphoto src={res.player.photo} />
                  <Pname>{res.player.name}</Pname>
                </PlayerBox>
                <PlayerBox style={{ flexDirection: "column" }}>
                  <Pbirth>
                    {res.player.birth.date} ({res.player.age}),{" "}
                    {res.player.nationality}
                  </Pbirth>
                  <PWeight>
                    {res.player.height} {res.player.weight}
                  </PWeight>
                </PlayerBox>
              </PlayersBox>
              <PlayersBox style={{ width: "70%" }}>
                <PlayerBox>
                  <Tphoto src={res.statistics[0].team.logo} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Tname>{res.statistics[0].team.name}</Tname>
                    <Tleague>
                      {res.statistics[0].league.name},{" "}
                      {res.statistics[0].league.country}
                    </Tleague>
                  </div>
                </PlayerBox>
                <div style={{ display: "flex", gap: "10px" }}>
                  <span onClick={() => setCategory("attack")}>attack</span>
                  <span onClick={() => setCategory("defence")}>defence</span>
                </div>
                <DetailsBox>
                  {category === "attack" && (
                    <>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Appearences</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>LineUp</Pstats>
                          <Pstats>{res.statistics[0].games.appearences}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Minutes</Pstats>
                          <Pstats>{res.statistics[0].games.minutes}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Rating</Pstats>
                          <Pstats>{res.statistics[0].games.rating}</Pstats>
                        </StatBox>
                      </DetailBox>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Goals</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Goal</Pstats>
                          <Pstats>{res.statistics[0].goals.total}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Assist</Pstats>
                          <Pstats>{res.statistics[0].goals.assists}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Rating</Pstats>
                          <Pstats>{res.statistics[0].games.rating}</Pstats>
                        </StatBox>
                      </DetailBox>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Passes</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Pass</Pstats>
                          <Pstats>{res.statistics[0].passes.total}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Key pass</Pstats>
                          <Pstats>{res.statistics[0].passes.key}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Accuracy</Pstats>
                          <Pstats>{res.statistics[0].passes.accuracy}%</Pstats>
                        </StatBox>
                      </DetailBox>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Dribbles</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Attempts</Pstats>
                          <Pstats>{res.statistics[0].dribbles.attempts}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Success</Pstats>
                          <Pstats>{res.statistics[0].dribbles.success}</Pstats>
                        </StatBox>
                      </DetailBox>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Shots</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Shot</Pstats>
                          <Pstats>{res.statistics[0].shots.total}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>On</Pstats>
                          <Pstats>{res.statistics[0].shots.on}</Pstats>
                        </StatBox>
                      </DetailBox>
                    </>
                  )}
                  {category === "defence" && (
                    <>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Tackles</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Tackle</Pstats>
                          <Pstats>{res.statistics[0].tackles.total}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Block</Pstats>
                          <Pstats>
                            {res.statistics[0].tackles.blocks == null
                              ? 0
                              : res.statistics[0].tackles.blocks}
                          </Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Interceptions</Pstats>
                          <Pstats>
                            {res.statistics[0].tackles.interceptions == null
                              ? 0
                              : res.statistics[0].tackles.blocks}
                          </Pstats>
                        </StatBox>
                      </DetailBox>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Fouls</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Drawn</Pstats>
                          <Pstats>{res.statistics[0].fouls.drawn}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Committed</Pstats>
                          <Pstats>{res.statistics[0].fouls.committed}</Pstats>
                        </StatBox>
                      </DetailBox>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Cards</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Yellow</Pstats>
                          <Pstats>{res.statistics[0].cards.yellow}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>YellowRed</Pstats>
                          <Pstats>{res.statistics[0].fouls.committed}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Red</Pstats>
                          <Pstats>{res.statistics[0].cards.red}</Pstats>
                        </StatBox>
                      </DetailBox>
                      <DetailBox>
                        <StatBox
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          <Pstats>Category</Pstats>
                          <Pstats>Penalty</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Won</Pstats>
                          <Pstats>
                            {res.statistics[0].penalty.won == null
                              ? 0
                              : res.statistics[0].penalty.won}
                          </Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Scored</Pstats>
                          <Pstats>{res.statistics[0].penalty.scored}</Pstats>
                        </StatBox>
                        <StatBox>
                          <Pstats>Missed</Pstats>
                          <Pstats>{res.statistics[0].penalty.missed}</Pstats>
                        </StatBox>
                      </DetailBox>
                    </>
                  )}
                </DetailsBox>
              </PlayersBox>
            </Box>
          ))}
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default PlayerDetail;
