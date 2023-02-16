import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  top: 100px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 80vh;
  padding: 10px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  border-bottom: 2px solid black;
  padding: 15px;
`;

const LeagueDetail = () => {
  const [searchParams, _] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <Wrapper>
      <Cols>
        <Col></Col>
      </Cols>
    </Wrapper>
  );
};

export default LeagueDetail;
