import styled from "styled-components";

const Banner = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
`;

const Col = styled.div`
  width: 40vw;
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
  cursor: pointer;
  padding: 15px;
`;

const SerieTeams = () => {
  return (
    <Banner>
      <Cols>
        <Col></Col>
      </Cols>
    </Banner>
  );
};

export default SerieTeams;
