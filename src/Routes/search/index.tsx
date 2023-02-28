import { motion } from "framer-motion";
import { useMatch, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getSearchLeague, getSearchTeam, IGetLeagues, IgetTeams } from "./api";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-size: cover;
  background-position: center center;
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
  gap: 5px;
  width: 50vw;
  height: 80vh;
  padding: 10px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  padding: 15px;
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`;

const Category = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const Name = styled.h3`
  font-size: 24px;
  margin-left: 10px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Search = () => {
  return null;
  /* const [searchParams, _] = useSearchParams();
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
      <Wrapper
        style={{
          backgroundImage: `linear-gradient(to bottom, gray, transparent),
                      url("https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg")`,
        }}
      >
        <Cols>
          {leagueData !== undefined && (
            <Col>
              <Category>LEAGUE</Category>
              {leagueData?.response.slice(0, 5).map((league) => (
                <Box
                  style={{ backgroundColor: "rgba(255,255,237,0.5)" }}
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
                  style={{ backgroundColor: "rgba(173, 216, 230, 0.5)" }}
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
  ); */
};

export default Search;
