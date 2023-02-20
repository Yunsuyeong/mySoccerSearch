import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getSearchPlayer, IGetPlayers } from "./api";

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
  align-items: center;
  background-color: white;
  color: black;
  padding: 20px;
`;

const PlayersBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 2px solid white;
  background-color: gray;
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
  background-color: white;
  padding: 10px;
`;

const DetailBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding-top: 10px;
  gap: 10px;
`;

const Pstats = styled.h3`
  font-size: 18px;
`;

const PlayerDetail = () => {
  const [searchParams, _] = useSearchParams();
  const playerId = searchParams.get("id");
  const playerName = searchParams.get("name");
  const { data: DetailData, isLoading } = useQuery<IGetPlayers>(
    ["player", "detail"],
    () => getSearchPlayer(playerId!, playerName!)
  );
  const Response = DetailData?.response;
  return (
    <Wrapper>
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
                <DetailsBox>
                  <DetailBox>
                    <Pstats>Appearences</Pstats>
                    <Pstats>
                      LineUp : {res.statistics[0].games.appearences}
                    </Pstats>
                    <Pstats>Minutes : {res.statistics[0].games.minutes}</Pstats>
                    <Pstats>Rating : {res.statistics[0].games.rating}</Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Goals</Pstats>
                    <Pstats>Goal : {res.statistics[0].goals.total}</Pstats>
                    <Pstats>Assist : {res.statistics[0].goals.assists}</Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Passes</Pstats>
                    <Pstats>Pass : {res.statistics[0].passes.total}</Pstats>
                    <Pstats>Key pass : {res.statistics[0].passes.key}</Pstats>
                    <Pstats>
                      Accuracy : {res.statistics[0].passes.accuracy}%
                    </Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Dribbles</Pstats>
                    <Pstats>
                      Attempts : {res.statistics[0].dribbles.attempts}
                    </Pstats>
                    <Pstats>
                      Success : {res.statistics[0].dribbles.success}
                    </Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Shots</Pstats>
                    <Pstats>Shot : {res.statistics[0].shots.total}</Pstats>
                    <Pstats>On : {res.statistics[0].shots.on}</Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Tackles</Pstats>
                    <Pstats>Tackle : {res.statistics[0].tackles.total}</Pstats>
                    <Pstats>
                      Block :{" "}
                      {res.statistics[0].tackles.blocks == null
                        ? 0
                        : res.statistics[0].tackles.blocks}
                    </Pstats>
                    <Pstats>
                      Interceptions :{" "}
                      {res.statistics[0].tackles.interceptions == null
                        ? 0
                        : res.statistics[0].tackles.blocks}
                    </Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Fouls</Pstats>
                    <Pstats>Drawn : {res.statistics[0].fouls.drawn}</Pstats>
                    <Pstats>
                      Committed : {res.statistics[0].fouls.committed}
                    </Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Cards</Pstats>
                    <Pstats>Yellow : {res.statistics[0].cards.yellow}</Pstats>
                    <Pstats>
                      YellowRed : {res.statistics[0].cards.yellowred}
                    </Pstats>
                    <Pstats>Red : {res.statistics[0].cards.red}</Pstats>
                  </DetailBox>
                  <DetailBox>
                    <Pstats>Penalty</Pstats>
                    <Pstats>
                      Won :{" "}
                      {res.statistics[0].penalty.won == null
                        ? 0
                        : res.statistics[0].penalty.won}
                    </Pstats>
                    <Pstats>Scored : {res.statistics[0].penalty.scored}</Pstats>
                    <Pstats>Missed : {res.statistics[0].penalty.missed}</Pstats>
                  </DetailBox>
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
