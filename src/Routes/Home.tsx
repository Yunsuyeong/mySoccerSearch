import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  background-size: cover;
  background-position: center center;
`;

const Cols = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  font-size: 36px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;

  :hover {
    font-weight: bold;
    opacity: 1;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, gray, transparent),
                      url("https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg")`,
      }}
    >
      <Cols>
        <Title>Soccer Search</Title>
        <Description>
          Using API-FOOTBALL, We deliver professional football-related data.
        </Description>
        <Description>
          1. You can check the rankings of the five major European leagues and
          the details of each team.
          <br />
          <br />
          2. You can check the ranking of scoring in the top five European
          leagues and the ranking of those who collected a lot of cards.
          <br />
          <br />
          3. You can search for information about leagues, teams, and players.
        </Description>
        <Col>
          <Box
            style={{ backgroundColor: "rgba(173, 216, 230, 1)" }}
            onClick={() => navigate("/team")}
          >
            1. Move to Team Page
          </Box>
          <Box
            style={{ backgroundColor: "rgba(144, 238, 144, 1)" }}
            onClick={() => navigate("/player")}
          >
            2. Move to Player Page
          </Box>
        </Col>
      </Cols>
    </Wrapper>
  );
};

export default Home;
