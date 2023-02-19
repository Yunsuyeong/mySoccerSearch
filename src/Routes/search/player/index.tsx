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
              </PlayersBox>
            </Box>
          ))}
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default PlayerDetail;
