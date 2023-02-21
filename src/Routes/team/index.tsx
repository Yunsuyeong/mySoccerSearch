import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getLeagues, IGetLeagues } from "./api";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-size: cover;
  background-position: center center;
`;

const Cols = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 80%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 36px;
  padding: 10px;
  cursor: pointer;
`;

const TLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Team = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<IGetLeagues>(["leagues"], getLeagues);
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, gray, transparent),
                      url("https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg")`,
      }}
    >
      <Cols>
        <Col>
          <Box onClick={() => navigate(`/team/${data?.response[5].league.id}`)}>
            <TLogo src={data?.response[5].league.logo} />
            <h1>{data?.response[5].league.name}</h1>
          </Box>
          <Box onClick={() => navigate("/team/140")}>
            <h1>La liga</h1>
          </Box>
          <Box onClick={() => navigate(`/team/${data?.response[7].league.id}`)}>
            <TLogo src={data?.response[7].league.logo} />
            <h1>{data?.response[7].league.name}</h1>
          </Box>
          <Box onClick={() => navigate(`/team/${data?.response[6].league.id}`)}>
            <TLogo src={data?.response[6].league.logo} />
            <h1>{data?.response[6].league.name}</h1>
          </Box>
          <Box onClick={() => navigate(`/team/${data?.response[2].league.id}`)}>
            <TLogo src={data?.response[2].league.logo} />
            <h1>{data?.response[2].league.name}</h1>
          </Box>
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default Team;
