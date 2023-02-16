import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 200px;
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

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Cols>
        <Col>
          <Box onClick={() => navigate("/league")}>
            <h1>LEAGUE</h1>
          </Box>
          <Box onClick={() => navigate("/team")}>
            <h1>TEAM</h1>
          </Box>
          <Box onClick={() => navigate("/player")}>
            <h1>PLAYER</h1>
          </Box>
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default Home;
