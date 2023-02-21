import styled from "styled-components";
import { useQuery } from "react-query";
import { getTeams, IgetTeams } from "./api";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { makeImagePath } from "../../utils";

const Wrapper = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: black;
`;

const Cols = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 150px;
`;

const Col = styled.div`
  display: grid;
  width: 45vw;
  height: 80vh;
  padding: 10px;
  margin-bottom: 30px;
`;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  border-bottom: 2px solid black;
  padding: 15px;
`;

const TLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Tname = styled.h3`
  width: 35%;
  font-size: 24px;
  margin-left: 10px;
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

const BLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Bigname = styled.h3`
  position: relative;
  top: -60px;
  color: white;
  font-size: 36px;
  padding: 10px;
`;

const Bigcountry = styled.p`
  position: relative;
  top: -60px;
  color: white;
  font-size: 24px;
  padding: 20px;
`;

const Bigfounded = styled.p`
  position: relative;
  top: -100px;
  color: white;
  font-size: 20px;
  padding: 20px;
`;

const Bigvenue = styled.h3`
  position: relative;
  top: -100px;
  color: white;
  font-size: 24px;
  padding: 20px;
`;

const Bigaddress = styled.p`
  position: relative;
  top: -140px;
  color: white;
  font-size: 20px;
  padding: 20px;
`;

const Bigcapa = styled.p`
  position: relative;
  top: -180px;
  color: white;
  font-size: 18px;
  padding: 20px;
`;

const SerieTeams = () => {
  const { data, isLoading } = useQuery<IgetTeams>(["teams", "italy"], () =>
    getTeams(135)
  );
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const teamMatch = useMatch("/team/135/:teamId");
  const onTeamClick = (teamId: number) => {
    navigate(`/team/135/${teamId}`);
  };
  const onOverlayClick = () => {
    navigate("/team/135");
  };
  const clickedTeam =
    teamMatch?.params.teamId &&
    data?.response.find(
      (team) => String(team.team.id) === teamMatch?.params.teamId
    );
  return (
    <Wrapper>
      <Cols>
        <Col>
          {data?.response.slice(0, 10).map((team) => (
            <Box
              layoutId={team.team.id + ""}
              key={team.team.id}
              onClick={() => onTeamClick(team.team.id)}
            >
              <TLogo src={team.team.logo} />
              <Tname>{team.team.name}</Tname>
            </Box>
          ))}
        </Col>
        <Col>
          {data?.response.slice(10, 20).map((team) => (
            <Box
              layoutId={team.team.id + ""}
              key={team.team.id}
              onClick={() => onTeamClick(team.team.id)}
            >
              <TLogo src={team.team.logo} />
              <Tname>{team.team.name}</Tname>
            </Box>
          ))}
        </Col>
      </Cols>
      <AnimatePresence>
        {teamMatch ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Bigbox
              style={{ top: scrollY.get() + 100 }}
              layoutId={teamMatch.params.teamId}
            >
              {clickedTeam && (
                <>
                  <BigCover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent),
                      url(${makeImagePath(clickedTeam.venue.id)})`,
                    }}
                  />
                  <Bigname>
                    <BLogo src={clickedTeam.team.logo} />
                    {clickedTeam.team.name}
                  </Bigname>
                  <Bigcountry>Country : {clickedTeam.team.country}</Bigcountry>
                  <Bigfounded>Founded : {clickedTeam.team.founded}</Bigfounded>
                  <Bigvenue>Venue : {clickedTeam.venue.name}</Bigvenue>
                  <Bigaddress>
                    Address : {clickedTeam.venue.address},{" "}
                    {clickedTeam.venue.city}
                  </Bigaddress>
                  <Bigcapa>Capacity : {clickedTeam.venue.capacity}</Bigcapa>
                </>
              )}
            </Bigbox>
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default SerieTeams;
