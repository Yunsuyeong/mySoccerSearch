import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: absolute;
  width: 100%;
  height: 80vh;
  padding: 10px;
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

const Player = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Cols>
        <Col>
          <Box onClick={() => navigate("/player/score")}>
            <h1>Scorer</h1>
          </Box>
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default Player;
