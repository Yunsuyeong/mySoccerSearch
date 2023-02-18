import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getTeamsSquad, IgetSquads } from "./api";

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

const TeamBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const SquadBox = styled.div`
  position: relative;
  width: 80vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  background-color: gray;
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

const PlayerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
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
  const Response = SquadData?.response;
  return (
    <Wrapper>
      <Cols>
        <Col>
          {Response?.map((res) => (
            <Box key={res.team.id}>
              <TeamBox>
                <Tlogo src={res.team.logo} />
                <Tname>{res.team.name}</Tname>
              </TeamBox>
              <div style={{ display: "flex" }}>
                <SquadBox>
                  {res.players.map((player) => (
                    <PlayerBox>
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
            </Box>
          ))}
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default TeamDetail;
