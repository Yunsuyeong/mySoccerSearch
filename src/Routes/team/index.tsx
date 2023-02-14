import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
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

const Team = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Team;
