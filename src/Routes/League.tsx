import { useQuery } from "react-query";
import styled from "styled-components";
import { getLeagues, IGetLeagues } from "./player/api";

const Wrapper = styled.div`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 24px;
  padding-top: 20px;
  cursor: pointer;
`;

const League = () => {
  const { data, isLoading } = useQuery<IGetLeagues>(
    ["league", "england"],
    getLeagues
  );
  console.log(data?.response[0].league?.name);
  return (
    <>
      <Wrapper />
      <Cols>
        <Col>
          {data?.response.slice(0, 6).map((res) => (
            <Box key={res.league.id}>
              <h1>{res.league.name}</h1>
              <h2>{res.country.code}</h2>
            </Box>
          ))}
        </Col>
      </Cols>
    </>
  );
};

export default League;
