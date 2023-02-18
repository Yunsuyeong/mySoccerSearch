import { motion } from "framer-motion";
import { useMatch, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getSearchLeague, getSearchTeam, IGetLeagues, IgetTeams } from "./api";

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

const Category = styled.h1`
  font-size: 36px;
  color: white;
  text-align: center;
`;

const Name = styled.h3`
  font-size: 24px;
  margin-left: 10px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
`;

const Bigbox = styled(motion.div)`
  position: absolute;
  background-color: black;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
`;

const BigCover = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center center;
`;

const Search = () => {
  const [searchParams, _] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const navigate = useNavigate();
  const { data: leagueData, isLoading } = useQuery<IGetLeagues>(
    ["search", "league"],
    () => getSearchLeague(keyword!)
  );
  const { data: teamData, isLoading: isLoading2 } = useQuery<IgetTeams>(
    ["search", "team"],
    () => getSearchTeam(keyword!)
  );
  return (
    <>
      <Wrapper>
        <Cols>
          {leagueData !== undefined && (
            <Col>
              <Category>LEAGUE</Category>
              {leagueData?.response.slice(0, 5).map((league) => (
                <Box
                  key={league.league.id}
                  onClick={() =>
                    navigate(`/search/league?id=${league.league.id}`)
                  }
                >
                  <Img src={league.league.logo} />
                  <Name>{league.league.name}</Name>
                </Box>
              ))}
            </Col>
          )}
          {teamData !== undefined && (
            <Col>
              <Category>TEAM</Category>
              {teamData?.response.slice(0, 5).map((team) => (
                <Box
                  key={team.team.id}
                  onClick={() => navigate(`/search/team?id=${team.team.id}`)}
                >
                  <Img src={team.team.logo} />
                  <Name>{team.team.name}</Name>
                </Box>
              ))}
            </Col>
          )}
        </Cols>
      </Wrapper>
    </>
  );
};

export default Search;
