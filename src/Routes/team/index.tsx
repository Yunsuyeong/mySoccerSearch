import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const Banner = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 100px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 60vw;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 36px;
  padding-top: 20px;
  cursor: pointer;
`;

const Team = () => {
  const navigate = useNavigate();
  return (
    <Banner>
      <Cols>
        <Col>
          <Box onClick={() => navigate("/team/39")}>
            <h1>Premier League</h1>
          </Box>
          <Box onClick={() => navigate("/team/140")}>
            <h1>La liga</h1>
          </Box>
          <Box onClick={() => navigate("/team/135")}>
            <h1>Serie A</h1>
          </Box>
          <Box onClick={() => navigate("/team/78")}>
            <h1>Bundesliga</h1>
          </Box>
        </Col>
      </Cols>
    </Banner>
  );
};

export default Team;
