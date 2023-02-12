import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  top: -650px;
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

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Banner></Banner>
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
    </>
  );
};

export default Home;
