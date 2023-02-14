import styled from "styled-components";
import { useQuery } from "react-query";
import { getTeams, IgetTeams } from "./api";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 150vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  position: relative;
  top: 150px;
`;

const Col = styled.div`
  display: grid;
  width: 45vw;
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
  padding: 15px;
`;

const TLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Tname = styled.h3`
  width: 35%;
  font-size: 24px;
  margin-left: 10px;
`;

const LaligaTeams = () => {
  const { data, isLoading } = useQuery<IgetTeams>(["teams", "spain"], () =>
    getTeams(140)
  );
  return (
    <Wrapper>
      <Cols>
        <Col>
          {data?.response.slice(0, 10).map((team) => (
            <Box key={team.team.id}>
              <TLogo src={team.team.logo} />
              <Tname>{team.team.name}</Tname>
            </Box>
          ))}
        </Col>
        <Col>
          {data?.response.slice(10, 20).map((team) => (
            <Box key={team.team.id}>
              <TLogo src={team.team.logo} />
              <Tname>{team.team.name}</Tname>
            </Box>
          ))}
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default LaligaTeams;
