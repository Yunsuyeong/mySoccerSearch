import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  padding-top: 20px;
  cursor: pointer;
`;

const Player = () => {
  const navigate = useNavigate();
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, gray, transparent),
                      url("https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg")`,
      }}
    >
      <Cols>
        <Col>
          <Box onClick={() => navigate("/player/score")}>
            <h1>Top Scorer</h1>
          </Box>
          <Box onClick={() => navigate("/player/card")}>
            <h1>Top Card Collector</h1>
          </Box>
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default Player;
