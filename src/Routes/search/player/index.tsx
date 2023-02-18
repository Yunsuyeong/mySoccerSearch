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
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: white;
  color: black;
  padding: 20px;
`;

const PlayerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const Pname = styled.h3`
  font-size: 24px;
  font-weight: bold;
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
  console.log(DetailData);
  return (
    <Wrapper>
      <Cols>
        <Col>
          {Response?.map((res) => (
            <Box>
              <PlayerBox>
                <Pname>{res.player.name}</Pname>
              </PlayerBox>
            </Box>
          ))}
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default PlayerDetail;
