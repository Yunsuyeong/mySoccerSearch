import styled from "styled-components";

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
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
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
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, gray, transparent),
                      url("https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg")`,
      }}
    >
      <Cols>
        <Title>Soccer Search</Title>
        <Col></Col>
      </Cols>
    </Wrapper>
  );
};

export default Home;
